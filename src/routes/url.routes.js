import { Router } from 'express';
import { createShortUrl,getShortUrl,visitShortUrl } from '../controllers/url.controller.js';

const router = Router();

router.post('/',createShortUrl)
router.get('/:shortId',getShortUrl)
router.get('/:shortId/visit',visitShortUrl)

export default router;
