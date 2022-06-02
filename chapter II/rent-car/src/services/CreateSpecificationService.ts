import ISpecificationRepository from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
export default class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExist = 
    }
}
