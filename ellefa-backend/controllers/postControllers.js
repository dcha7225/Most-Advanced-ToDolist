const Post = require("../models/post");

exports.createNewPosts = async (req, res, next) => {
   try{
        let {username, password, items} = req.body;
        await Post.save(username, password, items); 
        res.status(201).json({message: "Post Created"});
   } catch (error){
        console.log(error);
        next(error);
   }
};


exports.updatePostById = async (req, res, next) => {
  try{
      let {username, items} = req.body;
      await Post.update(items, username);
      res.status(200).json({message: "Post Updated"});
  } catch (error){
      console.log(error);
      next(error);
  }
  };
  