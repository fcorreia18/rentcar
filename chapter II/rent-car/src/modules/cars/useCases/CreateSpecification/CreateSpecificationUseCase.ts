import { inject, injectable } from "tsyringe";

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
            throw new Error("Specification Already Exist");
        }

        await this.specification.create({ name, description });
    }
}
