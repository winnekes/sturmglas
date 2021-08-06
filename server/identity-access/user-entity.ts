import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Mood } from "../mood/mood-entity";

// TODO save email when user signs in via auth0
@Entity()
export class User {
  @Index({ unique: true })
  @Column("varchar")
  email!: string;

  @OneToMany(() => Mood, (mood) => mood.user, {
    onDelete: "CASCADE",
  })
  moods!: Mood[];

  @CreateDateColumn("timestamptz")
  createdAt!: Date;

  @UpdateDateColumn("timestamptz")
  updatedAt?: Date;
}
