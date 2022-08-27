import { ICreateUserDTO } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {
    async execute(user: ICreateUserDTO): Promise<void> {}
}
