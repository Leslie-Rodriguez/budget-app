import {IsString, IsNotEmpty} from 'class-validator';
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    last_name: string;

    @IsString()
    @IsNotEmpty()
    username: string; 

    @IsString()
    @IsNotEmpty()
    password: string;

    constructor(name: string, last_name: string, username: string, password: string) {
        this.name = name;
        this.last_name = last_name
        this.username = username
        this.password = password
        console.log('Creo User Entity para ' + this.name);
    }
}
