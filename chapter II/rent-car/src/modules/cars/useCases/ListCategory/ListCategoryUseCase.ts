import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

export class ListCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    public execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}
