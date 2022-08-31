import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    userFound: {
        name: string;
        email: string;
    };
    token: string;
}

injectable();
export class autenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const userFound = await this.userRepository.findByUserEmail(email);

        if (!userFound) {
            throw new Error("Incorrect Email or Password");
        }
        const comparePassword = await compare(password, userFound.password);

        if (!comparePassword) {
            throw new Error("Incorrect Email or Password");
        }
        // Payload: dados que queremos passar com o token, é opcional, podemos deixar um objecto vazio
        const token = sign(
            {
                name: userFound.name,
                email: userFound.email,
            },
            "bc9235d461f3b7ec731a7ff5bc4c6ac3",
            { subject: userFound.id, expiresIn: "1d" }
        );
        return {
            userFound,
            token,
        };
    }
}
