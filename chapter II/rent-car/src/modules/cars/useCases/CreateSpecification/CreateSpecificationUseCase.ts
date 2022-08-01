import { ICreateSpecificationDTO } from "../../dtos/CreateSpecificationDTO";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

export class CreateSpecificationUseCase {
    constructor(private specification: ISpecificationRepository) {}

    public execute({ name, description }: ICreateSpecificationDTO) {
        const specificationAlreadyExist = this.specification.findByName(name);

        if (specificationAlreadyExist) {
            throw new Error("Specification Already Exist");
        }

        this.specification.create({ name, description });
    }
}
