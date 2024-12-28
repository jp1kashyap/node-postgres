import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({name:"users"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column({nullable:false})
    name: string

    @Column({nullable:false,unique:true})
    email: string

    @Column()
    age: number

    @Column({unique:true})
    phone:string;

    @Column({nullable:false})
    password:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

}
