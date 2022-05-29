import Category from "../models/Category";
import CategoriesRepository, {
    ICreateCategoryDTO,
} from "../repositories/CategoriesRepository";

export default class CreateCategoryService {
    constructor(private categoryRepository: CategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute({ name, description }: ICreateCategoryDTO): Category {
        const category = new Category();
        const categoryAlreadyExists = this.categoryRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }
        this.categoryRepository.create({
            name,
            description,
        });
        Object.assign(category, { name, description, created_at: new Date() });
        return category;
    }
}
