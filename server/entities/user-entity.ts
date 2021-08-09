import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Emotion, Mood } from "./mood-entity";

// TODO save email when user signs in via auth0
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  authId!: string;

  @Index({ unique: true })
  @Column("varchar")
  email!: string;

  @OneToMany("Mood", "user", {
    onDelete: "CASCADE",
  })
  moods!: Mood[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
