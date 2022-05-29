import Category from "../models/Category";
import CategoriesRepository from "../repositories/CategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
export default class CreateCategoryService {
    constructor(private categoryRepository: CategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

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
