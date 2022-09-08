import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateSpecificationDTO } from "../../dtos/CreateSpecificationDTO";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
export class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specification: ISpecificationRepository
    ) {}

    public async execute({ name, description }: ICreateSpecificationDTO) {
        const specificationAlreadyExist = await this.specification.findByName(
            name
        );

        if (specificationAlreadyExist) {
            throw new AppError("Specification Already Exists!");
        }

        await this.specification.create({ name, description });
    }
}
