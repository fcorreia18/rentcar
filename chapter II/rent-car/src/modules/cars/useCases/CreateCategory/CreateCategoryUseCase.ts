import Category from "../../models/Category";
import ICategoriesRepository from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
export default class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): Category {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }
        const category = this.categoryRepository.create({
            name,
            description,
        });

        return category;
    }
}