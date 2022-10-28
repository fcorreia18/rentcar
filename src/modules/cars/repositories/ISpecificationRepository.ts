import { ICreateSpecificationDTO } from "../dtos/CreateSpecificationDTO";
import { Specification } from "../entities/Specification";

export interface ISpecificationRepository {
    create(specification: ICreateSpecificationDTO): Promise<void>;
    list(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
}
