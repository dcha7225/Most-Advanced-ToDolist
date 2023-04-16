const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
    try {
        const [posts,_] = await Post.findAll();
        res.status(200).json({posts});
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewPosts = async (req, res, next) => {
   try{
        let {username, password, items} = req.body;

        let post = new Post(username, password, items);
        post = await post.save(); 
        
        res.status(201).json({message: "Post Created"});
   } catch (error){
        console.log(error);
        next(error);
   }
};

exports.getPostById = async (req, res, next) => {
    try{
        let postId = req.params.id;
        let [post,_] = await Post.findById(postId);
        res.status(200).json({post: post[0]});
    } catch (error){
        console.log(error);
        next(error);
    }
};

exports.deletePostById = async (req, res, next) => {
    try {
      let postId = req.params.id;
      await Post.delete(postId);
      res.status(200).json({ message: `Post with id ${postId} deleted successfully` });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };
  