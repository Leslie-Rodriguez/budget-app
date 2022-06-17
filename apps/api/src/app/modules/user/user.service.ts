import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
      private readonly usersRepository: Repository<User>,
    ) {}

  
  async insertUser(insertUserService: User) {
    const hashedPassword = await  bcrypt.hash(insertUserService.password, 12);
    insertUserService.password = hashedPassword
    return this.usersRepository.save(insertUserService);
  }

  async findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }
  
  findOne(username: string): Promise<User> {
      return this.usersRepository.findOne({where: {username: username }});
  }
  
  async remove(id: string): Promise<void> {
      await this.usersRepository.delete(id);
  }

  async update(user_id: string, updateUserService: User): Promise<User> {
    const hashedPassword = await  bcrypt.hash(updateUserService.password, 12);
    updateUserService.password = hashedPassword
      const user = await this.usersRepository.preload({
          user_id: user_id,
          ...updateUserService,
      });
      if (!user) {
        throw new NotFoundException(`Item ${user_id} not found`);
      }
      return this.usersRepository.save(user);
    }
   
}