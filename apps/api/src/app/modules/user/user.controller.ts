import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserMapper } from './user.mapper';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto> {

    return this.userService.insertUser(new UserMapper().dtoToEntity(createUserDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<CreateUserDto[]> {
    return this.userService.findAll();
  }

  @Get(':user_id')
  findOne(@Param('user_id') id: string): Promise<CreateUserDto> {
    return this.userService.findOne(id);
  }

  @Put(':user_id')
  @UseGuards(JwtAuthGuard)
  update(@Param('user_id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    return this.userService.update(id, new UserMapper().dtoToEntity(updateUserDto));
  }

  @Delete(':user_id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('user_id') id: string) {
    return this.userService.remove(id);
  }
}

