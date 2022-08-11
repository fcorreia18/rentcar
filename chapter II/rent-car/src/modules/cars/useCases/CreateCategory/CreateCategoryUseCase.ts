import { ICreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    public async execute({
        name,
        description,
    }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExist = await this.categoriesRepository.findByName(
            name
        );
        if (categoryAlreadyExist) {
            throw new Error("Category Already Exists");
        }
        await this.categoriesRepository.create({ name, description });
    }
}
