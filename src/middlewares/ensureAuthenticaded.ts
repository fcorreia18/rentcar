import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    name: string;
    email: string;
    sub: string;
}
export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }
    // não temos nada antes da virgula porque estamos a ignorar a primeira posição do array, pois não precisamos daquele dado
    const [, token] = authHeader.split(" ");

    // colocamos o verify dentro do try catch porque ele lança uma exceção caso falhe.
    try {
        const { sub: user_id } = verify(
            token,
            "bc9235d461f3b7ec731a7ff5bc4c6ac3"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const userFound = usersRepository.findById(user_id);

        if (!userFound) {
            throw new AppError("User doesnt exist!", 401);
        }

        req.user = {
            id: user_id,
        };
        next();
    } catch (error) {
        throw new AppError("Invalid Token!", 401);
    }
}
