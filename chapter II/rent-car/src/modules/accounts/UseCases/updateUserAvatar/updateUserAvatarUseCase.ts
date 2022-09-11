import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class updateUserAvatarUseCase {
    constructor(
        @inject("usersRepository") private usersRepository: IUsersRepository
    ) {}

    async execute(id: string, file: Express.Multer.File): Promise<void> {
        const user = await this.usersRepository.findById(id);
        if (!user) {
            throw new AppError("User not found");
        }
        user.avatar = file.path;
        const uploadAvatar = await this.usersRepository.create(user);
    }
}
