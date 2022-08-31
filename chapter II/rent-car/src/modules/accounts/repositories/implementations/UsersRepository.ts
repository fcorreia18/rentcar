import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

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
    async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ id });
        return user;
    }
    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ email });
        return user;
    }
}
