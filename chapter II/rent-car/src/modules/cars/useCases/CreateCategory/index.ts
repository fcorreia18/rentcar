import CategoriesRepository from "../../repositories/CategoriesRepository";
import CategoryController from "./CategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

const categoryRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
const categoryController = new CategoryController(createCategoryUseCase);

export { categoryController, categoryRepository };
