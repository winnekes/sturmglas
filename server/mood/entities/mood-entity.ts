import { IsDate, IsEnum } from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../../user/entities/user-entity";

export enum Emotion {
  HAPPY = "HAPPY",
  ANXIOUS = "ANXIOUS",
  TIRED = "TIRED",
  SAD = "SAD",
  ANGRY = "ANGRY",
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
  emotion!: Emotion;

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
