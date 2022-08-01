import { ICreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { Category } from "../model/Category";

export interface ICategoriesRepository {
    create(category: ICreateCategoryDTO): void;
    list(): Category[];
    findByName(name: string): Category;
}
