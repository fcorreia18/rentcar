import Specification from "../models/Specification";
import ISpecificationRepository from "./ISpecificationRepository";

export default class SpecificationRepository
    implements ISpecificationRepository
{
    private specification: Specification[];
    create(): Specification {}
    list(): Specification[] {
        return this.specification;
    }
}
