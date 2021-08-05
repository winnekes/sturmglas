import { Column, Entity, Index } from "typeorm";

// TODO: relations
@Entity()
export class User {
  @Index({ unique: true })
  @Column({ type: "varchar" })
  email!: string;
}
