import "reflect-metadata";
import {Connection, ConnectionOptions, createConnection, getConnectionOptions,} from "typeorm";
import {User} from "../identity-access/user-entity";
import {Mood} from "../mood/mood-entity";

export const initializeDatabase = async (
  optionOverrides: Record<string, any> = {}
): Promise<Connection> => {
  const connectionOptions = await getConnectionOptions();
  const options: ConnectionOptions = {
    ...connectionOptions,
    entities: [User, Mood],
    //migrations: [__dirname + "/migrations/*.ts"],
    ...optionOverrides,
  };

  return createConnection(options);
};
