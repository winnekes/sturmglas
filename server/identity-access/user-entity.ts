import {Column, CreateDateColumn, Entity, Index, OneToMany, UpdateDateColumn,} from "typeorm";
import {MoodEntity} from "../habit/mood-entity";

// TODO: add relationships
@Entity()
export class UserEntity {
  @Index({ unique: true })
  @Column("varchar")
  email!: string;

  @OneToMany(() => MoodEntity, (mood) => mood.user, {
    onDelete: "CASCADE",
  })
  moods!: MoodEntity[];

  @CreateDateColumn("timestamptz")
  createdAt!: Date;

  @UpdateDateColumn("timestamptz")
  updatedAt?: Date;
}
