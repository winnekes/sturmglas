import "reflect-metadata";
import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnection,
  getConnectionOptions,
} from "typeorm";
import { User } from "./identity-access/user-entity";
import { Mood } from "./mood/mood-entity";

export const initializeDatabase = async (
  optionOverrides: Record<string, any> = {}
) => {
  try {
    const conn = getConnection();
    console.log("dde");
    return conn;
  } catch (e) {
    const connectionOptions = await getConnectionOptions();
    const options: ConnectionOptions = {
      ...connectionOptions,
      synchronize: true,
      logging: true,
      entities: [User, Mood],
      //migrations: [__dirname + "/migrations/*.ts"],
      ...optionOverrides,
    };

    console.log("dd");
    await createConnection(options);
  }
};
