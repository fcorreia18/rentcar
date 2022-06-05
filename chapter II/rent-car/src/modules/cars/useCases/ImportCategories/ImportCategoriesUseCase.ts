import CategoriesRepository from "../../repositories/implementations/CategoriesRepository";

export default class ImportCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute(): void {
        //  const import = this.categoriesRepository.create
    }
}
