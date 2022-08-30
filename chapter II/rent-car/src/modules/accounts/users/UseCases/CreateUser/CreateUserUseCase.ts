import { inject, injectable } from "tsyringe";

import {
    ICreateUserDTO,
    IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute(user: ICreateUserDTO): Promise<void> {
        const userAlreadExist = await this.usersRepository.findByUserEmail(
            user.email
        );
        if (userAlreadExist) {
            throw new Error("User Already Exist");
        }
        await this.usersRepository.create(user);
    }
}
