import { Request, Response } from "express";

import Category from "../../models/Category";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    handle(request: Request, response: Response): Category {
        const { name, description } = request.body;

        const category = this.createCategoryUseCase.execute({
            name,
            description,
        });
        return category;
    }
}
