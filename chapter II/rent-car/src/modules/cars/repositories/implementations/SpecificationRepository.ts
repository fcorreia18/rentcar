import { getRepository, Repository } from "typeorm";

import { ICreateSpecificationDTO } from "../../dtos/CreateSpecificationDTO";
import { Specification } from "../../entities/Specification";

export class SpecificationRepository {
    specification: Repository<Specification>;

    constructor() {
        this.specification = getRepository(Specification);
    }

    public async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.specification.create({ name, description });

        await this.specification.save(specification);
    }

    public async list(): Promise<Specification[]> {
        const specifications = await this.specification.find();
        return specifications;
    }

    public async findByName(name: string): Promise<Specification> {
        const specification = await this.specification.findOne({ name });
        return specification;
    }
}
