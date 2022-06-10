export class CreateBudgetDto {
    budget_id: string;
    init_date: Date;
    final_date: Date;
    
    constructor(init_date: Date, final_date: Date) {
        this.init_date = init_date;
        this.final_date = final_date
        console.log('Creo Budget Entity para ' + this.init_date);
    }
}

