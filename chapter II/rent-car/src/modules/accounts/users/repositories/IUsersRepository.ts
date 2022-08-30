import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
    create(user: ICreateUserDTO): Promise<void>;
    list(): Promise<User[]>;
    findByUserEmail(email: string): Promise<User | undefined>;
}
