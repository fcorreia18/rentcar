import ISpecificationRepository from "../../repositories/ISpecificationRepository";

export default class ListSpecificationsUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}
    execute() {
        const all = this.specificationRepository.list();
        return all;
    }
}
