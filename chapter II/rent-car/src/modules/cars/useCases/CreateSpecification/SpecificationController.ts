import { Request, Response } from "express";

import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default class SpecificationController {
    constructor(private specificationUseCase: CreateSpecificationUseCase) {}
    handle(request: Request, response: Response) {
        const { name, description } = request.body;
        this.specificationUseCase.execute({
            name,
            description,
        });
        response.status(201).send();
    }
}
