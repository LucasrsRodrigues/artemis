import { OwnerRepository } from "../../repositories/implementations/OwnerRepository";
import { CreateOwnerController } from "./CreateOwnerController"
import { CreateOwnerUseCase } from "./CreateOwnerUseCase";

const ownerRepository = OwnerRepository.getInstance();
const createOwnerUseCase = new CreateOwnerUseCase(ownerRepository);
const createOwnerController = new CreateOwnerController(createOwnerUseCase);

export { createOwnerController };
