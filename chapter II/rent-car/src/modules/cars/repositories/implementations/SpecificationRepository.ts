import { ICreateSpecificationDTO } from "../../dtos/CreateSpecificationDTO";
import { Specification } from "../../model/Specification";

export class SpecificationRepository {
    specifications: Specification[];
    constructor() {
        this.specifications = [];
    }

    public create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }

    public list(): Specification[] {
        return this.specifications;
    }

    public findByName(name: string) {
        return this.specifications.find(
            (specification) => specification.name === name
        );
    }
}
