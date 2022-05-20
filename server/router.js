import Router from 'express'
import checkResponseStatus from './controlers.js';

const router = new Router()

router.get('/posts', checkResponseStatus)

export default router;
