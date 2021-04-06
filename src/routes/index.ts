import { Router } from 'express';

import { brandsRouter } from './brands.routes';

const router = Router();

router.use('/marcas', brandsRouter);

export { router }
