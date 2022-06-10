export class CreateCategoryDto {
    name: string;
    description: string;
    
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description
        console.log('Creo Category Entity para ' + this.name);
    }
}
