import { Request, Response } from "express";
import fs from "fs";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        fs.promises.unlink(file.path);

        const { path: avatar_file } = file;
        console.log("path", avatar_file);
        const { id: user_id } = req.user;
        const updateUserAvatarUseCase = container.resolve(
            UpdateUserAvatarUseCase
        );
        console.log("id", user_id);
        await updateUserAvatarUseCase.execute({ user_id, avatar_file });
        return res.send();
    }
}
