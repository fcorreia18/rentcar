import { ICreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    public execute({ name, description }: ICreateCategoryDTO): void {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExist) {
            throw new Error("Category Already Exists");
        }
        return this.categoriesRepository.create({ name, description });
    }
}
