import express from 'express';

import tokenRoutes from './token';
import swaggerRoutes from './swagger';

const router = express.Router();

router.use('/token', tokenRoutes);

router.use('/', swaggerRoutes);

export default router;
