import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        const { email } = req.body;
        const updateUserAvatarUseCase = container.resolve(
            UpdateUserAvatarUseCase
        );
        await updateUserAvatarUseCase.execute(email, file);
        return res.send();
    }
}
