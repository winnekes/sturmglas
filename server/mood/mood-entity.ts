import { IsDate, IsEnum } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../identity-access/user-entity";

enum Moods {
  ANGRY = "ANGRY",
  SAD = "SAD",
  ANXIOUS = "ANXIOUS",
  HAPPY = "HAPPY",
}

// TODO: add relationships
@Entity()
export class Mood {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsEnum(Moods)
  @Column("varchar")
  mood!: Moods;

  @IsDate()
  @Column()
  date!: Date;

  @ManyToOne("User", "moods", {
    cascade: true,
    onDelete: "CASCADE",
  })
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
