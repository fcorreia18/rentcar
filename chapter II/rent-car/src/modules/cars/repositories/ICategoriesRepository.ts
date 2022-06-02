import Category from "../../../models/Category";
import { ICreateCategoryDTO } from "./CategoriesRepository";

export default interface ICategoriesRepository {
    list(): Category[];
    findByName(name: string): Category | undefined;
    create(category: ICreateCategoryDTO): Category;
}
