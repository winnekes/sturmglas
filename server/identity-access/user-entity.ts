import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Mood } from "../mood/mood-entity";

// TODO save email when user signs in via auth0
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

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
