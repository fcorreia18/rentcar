import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
    public handle(request: Request, response: Response): Response {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);
        const categories = listCategoryUseCase.execute();
        return response.status(200).send(categories);
    }
}
