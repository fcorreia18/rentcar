import Specification from "../../models/Specification";
import ISpecificationRepository, {
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

export default class SpecificationRepository
    implements ISpecificationRepository
{
    private specification: Specification[];
    constructor() {
        this.specification = [];
    }
    create({ name, description }: ICreateSpecificationDTO): Specification {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specification.push(specification);
        return specification;
    }
    list(): Specification[] {
        return this.specification;
    }
    findByName(name: string): Specification | undefined {
        const specification = this.specification.find(
            (specification) => specification.name === name
        );
        return specification;
    }
}
