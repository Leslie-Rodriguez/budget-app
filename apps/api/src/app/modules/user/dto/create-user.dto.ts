export class CreateUserDto {
    name: string;
    last_name: string;
    username: string; 
    password: string;

    constructor(name: string, last_name: string, username: string, password: string) {
        this.name = name;
        this.last_name = last_name
        this.username = username
        this.password = password
        console.log('Creo User Entity para ' + this.name);
    }
}
