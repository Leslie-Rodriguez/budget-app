import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
      private readonly usersRepository: Repository<User>,
    ) {}

  insertUser(insertUserService: User) {
      return this.usersRepository.save(insertUserService);
  }

  async findAll(): Promise<User[]> {
      return this.usersRepository.find();
    }
  
  findOne(user_id: string): Promise<User> {
      return this.usersRepository.findOne({where: {user_id: user_id }});
  }
  
  async remove(id: string): Promise<void> {
      await this.usersRepository.delete(id);
  }

  async update(user_id: string, updateUserService: User): Promise<User> {
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