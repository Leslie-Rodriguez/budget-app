import { Injectable } from "@nestjs/common";
import { CreateRealIncomeDto } from "./dto/create-real-income.dto";
import { UpdateRealIncomeDto } from "./dto/update-real-income.dto";
import { RealIncome } from "./entities/real-income.entity";

@Injectable()

export class RealIncomeMapper {
    
    dtoToEntity(dto: CreateRealIncomeDto | UpdateRealIncomeDto): RealIncome {
        return new RealIncome(dto.amount, dto.date, dto.budget, dto.category)
    }

    entityToDto(entity: RealIncome): CreateRealIncomeDto {
        return new CreateRealIncomeDto(entity.amount, entity.date, entity.budget, entity.category);
    }
}

