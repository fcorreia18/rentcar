import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
    public handle(request: Request, response: Response): Response {
        const { file } = request;
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
        return response.send(importCategoryUseCase.execute(file));
    }
}
