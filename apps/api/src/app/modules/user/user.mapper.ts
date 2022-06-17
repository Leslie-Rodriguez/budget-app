import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()

export class UserMapper {
    
    dtoToEntity(dto: CreateUserDto | UpdateUserDto): User {
        return new User(dto.name, dto.last_name, dto.username, dto.password)
    }

    entityToDto(entity: User): CreateUserDto {
        return new CreateUserDto(entity.name, entity.last_name, entity.username, entity.password);
    }
}
