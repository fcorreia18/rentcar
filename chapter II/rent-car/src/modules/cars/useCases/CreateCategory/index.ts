import CategoriesRepository from "../../repositories/CategoriesRepository";
import CategoryController from "./CategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const categoryController = new CategoryController(createCategoryUseCase);

export { categoryController, categoriesRepository };
