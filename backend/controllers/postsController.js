const Post = require("../models/Post");

const createPost = async (req, res) => {
    try {
        const newPost = {
            title: req.body.title,
            desc: req.body.desc,
            username: req.body.username,
            photo: req.body.photo,
            categories: req.body.categories,
        };
        await Post.create(newPost);
        res.status(201).json({ message: "Created post successfully!" });
    } catch (error) {
        res.status(500).json(error);
    }
};

const getPost = async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id).exec();
        if (!foundPost) return res.status(400).json({ message: "Could not find post" });

        res.status(200).json(foundPost);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deletePost = async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id).exec();
        if (!foundPost) return res.status(400).json({ message: "Count not find post" });

        if (req.body.username === foundPost.username) {
            await Post.findByIdAndDelete(req.params.id).exec();
            res.status(200).json({ message: "Delete post successfully!" });
        } else {
            res.status(404).json({ message: "You are not the owner the post!" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const updatePost = async (req, res) => {
    try {
        const foundPost = await Post.findById(req.params.id).exec();
        if (!foundPost) return res.status(404).json({ message: "Could not find post" });

        if (req.body.username === foundPost.username) {
            await Post.findByIdAndUpdate(req.params.id, { ...req.body }).exec();
            res.status(200).json({ message: "Update post successfully!" });
        } else {
            res.status(404).json({ message: "You are not the owner of the post" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllPost = async (req, res) => {
    const username = req.query.user;
    const category = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username });
        } else if (category) {
            posts = await Post.find({ categories: { $in: [category] } });
        } else {
            posts = await Post.find({});
        }

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    deletePost,
    updatePost,
    getPost,
    createPost,
    getAllPost,
};
