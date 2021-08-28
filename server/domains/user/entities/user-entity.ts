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

export interface UserSettings {
  hasFinishedTutorial: boolean;
  hasCompanion: boolean;
  hasGoogleFitness: boolean;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  authId!: string;

  @Column()
  username!: string;

  @Index({ unique: true })
  @IsEmail()
  @Column("varchar")
  email!: string;

  @Column()
  pictureUrl!: string;

  @Column({
    type: "jsonb",
    default: {
      hasFinishedTutorial: false,
      hasCompanion: false,
      hasGoogleFitness: false,
    },
  })
  public settings!: UserSettings;

  @OneToMany("Mood", "user", {
    onDelete: "CASCADE",
  })
  moods!: Mood[];

  @Column({ default: "" })
  refreshToken!: string;

  @IsDate()
  @Column()
  lastLogin!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
