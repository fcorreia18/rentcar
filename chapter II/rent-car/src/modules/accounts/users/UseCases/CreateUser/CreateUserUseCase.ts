import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadExist = await this.usersRepository.findByUserEmail(
            email
        );
        if (userAlreadExist) {
            throw new Error("User Already Exist");
        }

        const encriptedPassword = await hash(password, 10);
        await this.usersRepository.create({
            name,
            email,
            password,
            driver_license,
        });
    }
}
