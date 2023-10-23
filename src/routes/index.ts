import express from 'express';

import tokenIndex from './token';

const router = express.Router();

router.use('/token', tokenIndex);

export default router;
