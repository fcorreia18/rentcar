import Specification from "../models/Specification";

export interface ICreateSpecificationDTO {
    name: string;
    description: string;
}
export default interface ISpecificationRepository {
    list(): Specification[];
    create(specification: ICreateSpecificationDTO): Specification;
}
