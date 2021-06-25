import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";


class ListUsersService {

    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.find();

        return classToPlain(users);
    }
}

export { ListUsersService }