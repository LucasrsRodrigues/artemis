import { Request, Response } from "express";
import { CreateOwnerUseCase } from "./CreateOwnerUseCase";

class CreateOwnerController {
  constructor(private createOwnerUseCase: CreateOwnerUseCase){}

  handle(request: Request, response: Response): Response{
    const { name } = request.body;

    this.createOwnerUseCase.execute({ name });

    return response.status(201).json({ message: "Owner criado com sucesso!" });
  }
}

export { CreateOwnerController };
