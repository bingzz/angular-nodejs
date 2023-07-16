import { Router } from 'express';
import { sample_users } from '../data';
import expressAsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';

const router = Router();

router.get('/seed', expressAsyncHandler(async (req, res) => {
  const usersCount = await UserModel.countDocuments();

  if (usersCount > 0) {
    res.send('Seed is already done')
    return
  };

  await UserModel.create(sample_users);
  res.send('Seed is done')
}));

router.post('/login', expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password })

  if (user) res.send(generateTokenResponse(user));

  res.status(404).send('Username or password is not valid');
}));

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email: user.email,
    isAdmin: user.isAdmin
  }, 'EnterPrivateKey', {
    expiresIn: '30d'
  });

  user.token = token;

  return user;
}

export default router;