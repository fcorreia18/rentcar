import { Request, Response } from "express";

import ListSpecificationsUseCase from "./ListSpecificationsUseCase";

export default class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
    handle(request: Request, response: Response) {
        response.status(200).json(this.listSpecificationsUseCase.execute());
    }
}
