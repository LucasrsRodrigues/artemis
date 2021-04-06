import { Owner } from "../model/Owner";

interface ICreateOwnerDTO {
  name: string;
}

interface IOwnerRepository {
  create({ name }:ICreateOwnerDTO) : void;
  findByName(name: string): Owner;
}

export { IOwnerRepository, ICreateOwnerDTO };
