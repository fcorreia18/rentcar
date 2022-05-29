import CategoriesRepository, {
    ICreateCategoryDTO,
} from "../repositories/CategoriesRepository";

export default class CreateCategoryService {
    constructor(private categoryRepository: CategoriesRepository) {
        this.categoryRepository = categoryRepository;
    }

    execute({ name, description }: ICreateCategoryDTO): void {
        const category = this.categoryRepository.findByName(name);
        if (category) {
            throw new Error("Category Already Exists");
        }
        this.categoryRepository.create({
            name,
            description,
        });
    }
}
