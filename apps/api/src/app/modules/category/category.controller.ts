import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { CategoryMapper } from './category.mapper';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto> {
    return this.categoryService.insertCategory(new CategoryMapper().dtoToEntity(createCategoryDto));
  }

  @Get()
  findAll(): Promise<CreateCategoryDto[]> {
    return this.categoryService.findAll();
  }

  @Get(':category_id')
  findOne(@Param('category_id') id: string): Promise<CreateCategoryDto> {
    return this.categoryService.findOne(id);
  }

  @Patch(':category_id')
  update(
    @Param('category_id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<UpdateCategoryDto> {
    return this.categoryService.update(id, new CategoryMapper().dtoToEntity(updateCategoryDto));
  }

  @Delete(':category_id')
  remove(@Param('category_id') id: string) {
    return this.categoryService.remove(id);
  }
}
