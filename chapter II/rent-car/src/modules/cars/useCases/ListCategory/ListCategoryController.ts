import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
    public async handle(
        request: Request,
        response: Response
    ): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);
        const categories = await listCategoryUseCase.execute();
        return response.status(200).send(categories);
    }
}
