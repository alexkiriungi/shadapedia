import express from 'express';
import { getUser, getUserFriends, addRemoveFriend } from './controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// READ ROUTES
router.get("/:id", verifyToken, getUser); //query strings
router.get("/:id/friends", verifyToken, getUserFriends);

//UPDATE ROUTE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;