import SpecificationRepository from "../../repositories/implementations/SpecificationRepository";

export default class ListSpecificationsUseCase {
    constructor(private specificationRepository: SpecificationRepository) {}
    execute() {
        const all = this.specificationRepository.list();
        return all;
    }
}
