import { IsDate, IsEmail } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Mood } from "../../mood/entities/mood-entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  authId!: string;

  @Column()
  firstName!: string;

  @Index({ unique: true })
  @IsEmail()
  @Column("varchar")
  email!: string;

  @Column()
  pictureUrl!: string;

  @OneToMany("Mood", "user", {
    onDelete: "CASCADE",
  })
  moods!: Mood[];

  @IsDate()
  @Column()
  lastLogin!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
