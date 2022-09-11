import { Request, Response } from "express";

export class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        return res.send();
    }
}
