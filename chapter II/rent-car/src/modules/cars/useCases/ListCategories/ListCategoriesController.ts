import { Request, Response } from "express";

import ListCategoriesUseCase from "./ListCategoriesUseCase";

export default class ListCategoriesController {
    constructor(private listCategorUseCase: ListCategoriesUseCase) {}
    handle(request: Request, response: Response) {
        const categories = this.listCategorUseCase.execute();
        return response.status(200).json(categories);
    }
}
