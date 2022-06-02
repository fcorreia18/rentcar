import Specification from "../models/Specification";

export default interface ISpecificationRepository {
    list(): Specification[];
    create(): Specification;
}
