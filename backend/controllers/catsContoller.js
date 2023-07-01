const Category = require("../models/Category");

const createCat = async (req, res) => {
    try {
        await Category.create({ ...req.body });
        res.status(201).json({ message: "Created category successfully!" });
    } catch (error) {
        res.status(500).json(erro);
    }
};

const getAllCats = async (req, res) => {
    try {
        const allCats = await Category.find({});
        res.status(200).json(allCats);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    createCat,
    getAllCats,
};
