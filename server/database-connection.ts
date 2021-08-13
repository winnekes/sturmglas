import "reflect-metadata";
import {
  ConnectionOptions,
  createConnection,
  getConnection,
  getConnectionOptions,
} from "typeorm";
import { Mood } from "./mood/entities/mood-entity";
import { User } from "./user/entities/user-entity";

export const initializeDatabase = async (
  optionOverrides: Record<string, any> = {}
) => {
  try {
    return getConnection();
  } catch (e) {
    const connectionOptions = await getConnectionOptions();
    const options: ConnectionOptions = {
      ...connectionOptions,
      synchronize: true,
      logging: true,
      entities: [Mood, User],
      //migrations: [__dirname + "/migrations/*.ts"],
      ...optionOverrides,
    };

    console.log("dd");
    return createConnection(options);
  }
};
