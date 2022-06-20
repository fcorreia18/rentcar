// eslint-disable-next-line import/no-unresolved
import { parse } from "csv-parse";
// eslint-disable-next-line import/no-unresolved
import fs from "fs";

import ICategoriesRepository from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}
export default class ImportCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File) {
        const categories: IImportCategory[] = [];
        const stream = fs.createReadStream(file.path);
        const parseFile = parse();
        stream.pipe(parseFile);
        parseFile.on("data", async (line) => {
            const [name, description] = line;
            categories.push({
                name,
                description,
            });
        });
        return categories;
    }
    execute(file: Express.Multer.File): void {
        console.log(this.loadCategories(file));
    }
}
