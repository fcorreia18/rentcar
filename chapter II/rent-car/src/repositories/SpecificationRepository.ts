import Specification from "../models/Specification";
import ISpecificationRepository, {
    ICreateSpecificationDTO,
} from "./ISpecificationRepository";

export default class SpecificationRepository
    implements ISpecificationRepository
{
    private specification: Specification[];
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = Object.assign(this.specification, {
            name,
            description,
            created_at: new Date(),
        });
    }
    list(): Specification[] {
        return this.specification;
    }
}
