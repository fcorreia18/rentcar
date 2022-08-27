import { User } from "../entities/User";

export interface ICreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
}

export interface IUsersRepository {
    create(user: ICreateUserDTO): Promise<void>;
    list(): Promise<User[]>;
    findByUserName(username: string): Promise<User | undefined>;
}
