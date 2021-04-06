import { Owner } from "../../model/Owner";
import { ICreateOwnerDTO, IOwnerRepository } from "../IOwnerRepository";

class OwnerRepository implements IOwnerRepository {
  private owner: Owner[];

  private static INSTANCE: OwnerRepository;

  constructor(){
    this.owner = [];
  }

  public static getInstance(): OwnerRepository{
    if(!OwnerRepository.INSTANCE){
      OwnerRepository.INSTANCE = new OwnerRepository();
    }

    return OwnerRepository.INSTANCE;
  }

  create({ name }: ICreateOwnerDTO): void {
    const owner = new Owner();

    Object.assign(owner, {
      name,
      date: new Date()
    });

    this.owner.push(owner);
  }

  findByName(name: string): Owner {
    const owner = this.owner.find(owner => owner.name === name);
    return owner;
  }

}

export { OwnerRepository };
