import {IsDate, IsEnum} from "class-validator";
import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";
import {UserEntity} from "../identity-access/user-entity";

enum Mood {
  ANGRY = "ANGRY",
  SAD = "SAD",
  ANXIOUS = "ANXIOUS",
  HAPPY = "HAPPY",
}

// TODO: add relationships
@Entity()
export class MoodEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsEnum(Mood)
  @Column("varchar")
  mood!: Mood;

  @IsDate()
  @Column()
  date!: Date;

  @ManyToOne(() => UserEntity, (user) => user.moods, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user!: UserEntity;

  @CreateDateColumn("timestamptz")
  createdAt!: Date;

  @UpdateDateColumn("timestamptz")
  updatedAt?: Date;
}
