import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    ormRepository: Repository<User>;
    constructor() {
        this.ormRepository = getRepository(User);
    }
    async create(user: ICreateUserDTO): Promise<void> {
        const newUser = this.ormRepository.create(user);
        await this.ormRepository.save(newUser);
    }
    list(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findByName(name: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}
