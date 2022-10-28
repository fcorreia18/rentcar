import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {
    private ormRepository: Repository<Category>;
    constructor() {
        this.ormRepository = getRepository(Category);
    }

    public async create({
        name,
        description,
    }: ICreateCategoryDTO): Promise<void> {
        const category = this.ormRepository.create({
            name,
            description,
        });
        await this.ormRepository.save(category);
    }

    public async list(): Promise<Category[]> {
        const categories = await this.ormRepository.find();
        return categories;
    }

    public async findByName(name: string): Promise<Category | undefined> {
        const category = await this.ormRepository.findOne({ name });
        return category;
    }
}
