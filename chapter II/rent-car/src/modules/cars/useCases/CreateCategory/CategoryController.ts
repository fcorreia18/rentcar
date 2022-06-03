import { Request, Response } from "express";

import Category from "../../models/Category";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({
            name,
            description,
        });
        return response.status(201).send();
    }
}
