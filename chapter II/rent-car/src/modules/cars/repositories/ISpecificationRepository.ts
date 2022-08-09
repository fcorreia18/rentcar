import { ICreateSpecificationDTO } from "../dtos/CreateSpecificationDTO";
import { Specification } from "../models/Specification";

export interface ISpecificationRepository {
    create(specification: ICreateSpecificationDTO): void;
    list(): Specification[];
    findByName(name: string): Specification;
}
