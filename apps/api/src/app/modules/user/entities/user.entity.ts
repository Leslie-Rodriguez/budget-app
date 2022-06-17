import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Budget } from '../../budget/entities/budget.entity';

@Entity()

export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  password: string;


  @ManyToMany(() => Budget, budget => budget.user)
  budget : Budget

  constructor(name: string, last_name: string, username: string, password: string) {
    this.name = name;
    this.last_name = last_name
    this.username = username
    this.password = password
    console.log('Creo User Entity para ' + this.name);
  }
}
