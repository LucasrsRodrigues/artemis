import { OwnerRepository } from "../../repositories/implementations/OwnerRepository";

interface IRequest {
  name: string;
}

class CreateOwnerUseCase {
  constructor(private ownerRepository: OwnerRepository){}

  execute({ name }: IRequest): void{
    const ownerAlreadyExists = this.ownerRepository.findByName(name);

    if(ownerAlreadyExists){
      throw new Error("Owner already exists!");
    }

    this.ownerRepository.create({ name });
  }
}

export { CreateOwnerUseCase };
