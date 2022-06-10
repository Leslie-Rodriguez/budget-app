import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Category } from "./entities/category.entity";

@Injectable()

export class CategoryMapper {
    
    dtoToEntity(dto: CreateCategoryDto | UpdateCategoryDto): Category {
        return new Category(dto.name, dto.description)
    }

    entityToDto(entity: Category): CreateCategoryDto {
        return new CreateCategoryDto(entity.name, entity.description);
    }
}
