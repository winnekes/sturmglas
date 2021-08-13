import { getRepository, Repository } from "typeorm";
import { User } from "../user/entities/user-entity";

export const getUser = (authId: string): Promise<User | undefined> => {
  const userRepository = getRepository("User") as Repository<User>;
  return userRepository.findOne({
    where: { authId },
  });
};
