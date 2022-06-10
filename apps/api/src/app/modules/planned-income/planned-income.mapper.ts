import { Injectable } from "@nestjs/common";
import { CreatePlannedIncomeDto } from "./dto/create-planned-income.dto";
import { UpdatePlannedIncomeDto } from "./dto/update-planned-income.dto";
import { PlannedIncome } from "./entities/planned-income.entity";

@Injectable()
export class PlannedIncomeMapper {
    dtoToEntity(dto: CreatePlannedIncomeDto | UpdatePlannedIncomeDto): PlannedIncome {
        return new PlannedIncome(dto.amount, dto.budget, dto.category)
    }

    entityToDto(entity: PlannedIncome): CreatePlannedIncomeDto {
        return new CreatePlannedIncomeDto(entity.amount, entity.budget, entity.category);
    }
}