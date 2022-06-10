import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>,
  ) {}

insertCategory(insertCategoryService: Category) {
    return this.categoriesRepository.save(insertCategoryService);
}

async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

findOne(category_id: string): Promise<Category> {
    return this.categoriesRepository.findOne({where: {category_id: category_id }});
}

async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
}

async update(category_id: string, updateCategoryService: Category): Promise<Category> {
    const category = await this.categoriesRepository.preload({
        category_id: category_id,
        ...updateCategoryService,
    });
    if (!category) {
      throw new NotFoundException(`Item ${category_id} not found`);
    }
    return this.categoriesRepository.save(category);
  }
}

