// eslint-disable-next-line import/no-unresolved
import { parse } from "csv-parse";
// eslint-disable-next-line import/no-unresolved
import fs from "fs";

export default class ImportCategoriesUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);
        const parseFile = parse();
        stream.pipe(parseFile);
        parseFile.on("data", async (line) => {
            console.log(line);
        });
    }
}
