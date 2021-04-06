import {Router} from 'express';

const brandsRouter = Router();

brandsRouter.get('/', (request,response) => {
  return response.json({message: 'list marcas'});
})


export { brandsRouter };
