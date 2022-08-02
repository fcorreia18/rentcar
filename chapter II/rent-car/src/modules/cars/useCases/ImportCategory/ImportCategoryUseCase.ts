import { parse } from "csv-parse";
import fs from "fs";

import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}
export class ImportCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}
    public loadCategories(
        file: Express.Multer.File
    ): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = parse();

            stream.pipe(parseFile);
            parseFile
                .on("data", (line) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }
    public async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const { name, description } = category;
            const categoryAlreadyExist =
                this.categoryRepository.findByName(name);

            if (!categoryAlreadyExist) {
                this.categoryRepository.create({ name, description });
            }
        });
    }
}
