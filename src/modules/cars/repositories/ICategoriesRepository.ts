import { ICreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { Category } from "../entities/Category";

export interface ICategoriesRepository {
    create(category: ICreateCategoryDTO): Promise<void>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category | undefined>;
}
