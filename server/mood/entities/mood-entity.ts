import { IsDate, IsEnum } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../identity-access/entities/user-entity";

export enum Emotion {
  ANGRY = "ANGRY",
  SAD = "SAD",
  ANXIOUS = "ANXIOUS",
  HAPPY = "HAPPY",
}

@Entity()
export class Mood {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsEnum(Emotion)
  @Column({
    type: "enum",
    enum: Emotion,
  })
  mood!: Emotion;

  @IsDate()
  @Column()
  date!: Date;

  @Column("text")
  description!: string;

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
