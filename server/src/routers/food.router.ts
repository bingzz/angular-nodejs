import { Router } from 'express';
import { sample_foods, sample_tags } from '../data';
import expressAsyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router = Router();

router.get('/seed', expressAsyncHandler(async (req, res) => {
  const foodsCount = await FoodModel.countDocuments();

  if (foodsCount > 0) {
    res.send('Seed is already done')
    return
  };

  await FoodModel.create(sample_foods);
  res.send('Seed is done')
}));

router.get('/', expressAsyncHandler(async (req, res) => {
  const foods = await FoodModel.find()
  res.send(foods);
}));

router.get('/search/:searchTerm', expressAsyncHandler(async (req, res) => {
  const searchTerm = req.params['searchTerm'];
  const searchRegex = new RegExp(searchTerm, 'i');

  const foods = await FoodModel.find({
    name: { $regex: searchRegex }
  })

  res.send(foods);
}));

router.get('/tags', expressAsyncHandler(async (req, res) => {
  const tags = await FoodModel.aggregate([
    { $unwind: '$tags' },
    {
      $group: {
        _id: '$tags',
        count: {
          $sum: 1
        }
      }
    }, {
      $project: {
        _id: 0,
        name: '$_id',
        count: '$count'
      }
    }
  ]).sort({ count: -1 })

  const all = {
    name: 'All',
    count: await FoodModel.countDocuments()
  }

  tags.unshift(all)
  res.send(tags);
}));

router.get('/tags/:tagName', expressAsyncHandler(async (req, res) => {
  const tagName = req.params['tagName'];
  const foods = await FoodModel.find({ tags: tagName })

  res.send(foods);
}));

router.get('/:foodID', expressAsyncHandler(async (req, res) => {
  const foodID = req.params['foodID'];
  const food = await FoodModel.findById(foodID);

  res.send(food);
}));

export default router;