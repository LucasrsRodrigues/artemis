import { Router } from 'express';

import {  } from "../modules/brands/useCases/createOwner";

const ownerRoutes = Router();

ownerRoutes.post('/', (request, response) => {
  return createOwnerController
})
