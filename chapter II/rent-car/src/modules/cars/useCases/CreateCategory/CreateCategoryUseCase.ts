import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
export class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) {}

    public async execute({
        name,
        description,
    }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExist = await this.categoriesRepository.findByName(
            name
        );
        if (categoryAlreadyExist) {
            throw new AppError("Category Already Exists!");
        }
        await this.categoriesRepository.create({ name, description });
    }
}
