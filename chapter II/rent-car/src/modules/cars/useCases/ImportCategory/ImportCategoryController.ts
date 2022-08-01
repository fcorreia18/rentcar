import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    public handle(request: Request, response: Response): Response {
        const { file } = request;
        return response.send(this.importCategoryUseCase.execute(file));
    }
}
