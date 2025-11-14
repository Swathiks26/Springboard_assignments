const Dog = require("../models/Dog");

// Register Dog
exports.registerDog = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const dog = await Dog.create({ name, description, owner: req.user.id });
    res.status(201).json(dog);
  } catch (error) {
    next(error);
  }
};

// Adopt Dog
exports.adoptDog = async (req, res, next) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) return res.status(404).json({ message: "Dog not found" });
    if (dog.adoptedBy)
      return res.status(400).json({ message: "Dog already adopted" });
    if (dog.owner.toString() === req.user.id)
      return res.status(400).json({ message: "Cannot adopt your own dog" });

    dog.adoptedBy = req.user.id;
    dog.adoptedMessage = req.body.message || "";
    await dog.save();
    res.json(dog);
  } catch (error) {
    next(error);
  }
};

// Remove Dog
exports.removeDog = async (req, res, next) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (!dog) return res.status(404).json({ message: "Dog not found" });
    if (dog.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });
    if (dog.adoptedBy)
      return res.status(400).json({ message: "Cannot remove adopted dog" });

    await dog.remove();
    res.json({ message: "Dog removed" });
  } catch (error) {
    next(error);
  }
};

// List Registered Dogs
exports.listRegisteredDogs = async (req, res, next) => {
  try {
    const { status = "all", page = 1, limit = 10 } = req.query;
    const filter = { owner: req.user.id };
    if (status === "adopted") filter.adoptedBy = { $ne: null };
    if (status === "available") filter.adoptedBy = null;

    const dogs = await Dog.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(dogs);
  } catch (error) {
    next(error);
  }
};

// List Adopted Dogs
exports.listAdoptedDogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const dogs = await Dog.find({ adoptedBy: req.user.id })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    res.json(dogs);
  } catch (error) {
    next(error);
  }
};
