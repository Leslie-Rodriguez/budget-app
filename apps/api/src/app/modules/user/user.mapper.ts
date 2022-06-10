import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

@Injectable()

export class UserMapper {
    
    dtoToEntity(dto: CreateUserDto | UpdateUserDto): User {
        return new User(dto.name, dto.username, dto.password, dto.last_name)
    }

    entityToDto(entity: User): CreateUserDto {
        return new CreateUserDto(entity.name, entity.username, entity.password, entity.last_name);
    }
}
