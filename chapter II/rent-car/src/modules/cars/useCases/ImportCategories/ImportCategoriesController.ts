import { Request, Response } from "express";

// import ImportCategoriesUseCase from "./ImportCategoriesUseCase";

export default class ImportCategoriesController {
    // constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;
        console.log(file);
        return response.send();
    }
}
