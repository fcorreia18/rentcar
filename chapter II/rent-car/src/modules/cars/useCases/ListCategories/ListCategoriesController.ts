import { Request, Response } from "express";

import CategoriesRepository from "../../repositories/CategoriesRepository";

export default class ListCategoriesController {
    constructor(private categoryRepository: CategoriesRepository) {}
    handle(request: Request, response: Response) {
        const categories = this.categoryRepository.list();
        return response.status(200).json(categories);
    }
}
