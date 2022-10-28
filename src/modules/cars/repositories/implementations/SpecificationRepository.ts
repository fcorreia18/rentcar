import { getRepository, Repository } from "typeorm";

import { ICreateSpecificationDTO } from "../../dtos/CreateSpecificationDTO";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
    ormRepository: Repository<Specification>;

    constructor() {
        this.ormRepository = getRepository(Specification);
    }

    public async create({
        name,
        description,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.ormRepository.create({ name, description });

        await this.ormRepository.save(specification);
    }

    public async list(): Promise<Specification[]> {
        const specifications = await this.ormRepository.find();
        return specifications;
    }

    public async findByName(name: string): Promise<Specification> {
        const specification = await this.ormRepository.findOne({ name });
        return specification;
    }
}
