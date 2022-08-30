import { User } from "../entities/User";

export interface ICreateUserDTO {
    name: string;
    password: string;
    email: string;
    driver_license: string;
}

export interface IUsersRepository {
    create(user: ICreateUserDTO): Promise<void>;
    list(): Promise<User[]>;
    findByUserEmail(email: string): Promise<User | undefined>;
}
