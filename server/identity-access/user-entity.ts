import {Column, Entity, Index} from "typeorm";

// TODO: add relationships
@Entity()
export class User {
  @Index({ unique: true })
  @Column({ type: "varchar" })
  email!: string;
}
