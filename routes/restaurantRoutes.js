const express = require("express");
const router = express.Router();

//* Restaurant Model
const RestaurantSchema = require("./../models/restaurantSchema");

//* @route GET api/restaurant
//* @desc  GET all restaurants
//* access Public
router.get("/", async (req, res) => {
  const restaurantList = await RestaurantSchema.find().sort({ name: 1 });
  res.send(restaurantList);
});

//* @route POST api/restaurant
//* @desc  Create a restaurant
//* access Public
router.post("/", async (req, res) => {
  const newRestaurant = new RestaurantSchema({
    name: req.body.name,
    description: req.body.description,
  });
  await newRestaurant.save();
  res.send(newRestaurant);
});

//* @route DELETE  api/restaurant
//* @desc  DELETE a restaurant
//* access Public
router.delete("/:id", async (req, res) => {
  const item = await RestaurantSchema.findByIdAndRemove(req.params.id);
  if (!item)
    return res.status(404).send("The movie with given id was not found");
  res.send({ success: true });
});

//* @route UPDATE api/restaurant
//* @desc  UPDATE a restaurant
//* access Public
router.put("/:id", async (req, res) => {
  const item = await RestaurantSchema.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
    },
    { new: true }
  );

  if (!item)
    return res
      .status(404)
      .send("The restaurant with the given ID was not found.");

  res.send(item);
});

module.exports = router;
