import SpecificationRepository from "../../repositories/implementations/SpecificationRepository";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";
import SpecificationController from "./SpecificationController";

const specificationRepository = SpecificationRepository.getInstance();
const specificationUseCase = new CreateSpecificationUseCase(
    specificationRepository
);
const specificationController = new SpecificationController(
    specificationUseCase
);

export { specificationController };
