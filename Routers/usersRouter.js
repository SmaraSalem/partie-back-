const express = require("express");
const User = require("../Models/userModel");
const router = express.Router();


//get all users
//@get
router.get("/", (req, res) => {
  User.find().sort({createdAt:-1}).then((data) => {
    //console.log(data[0]);
    res.send(data);
  });
});

//get all blocked users
//@ get
router.get('/blocked',async(req,res)=>{
    const usersBlocked = await User.find({blocked:true})
    res.json(usersBlocked)
})
//get all  unblocked users
//@ get
router.get('/unblocked',async(req,res)=>{
    const usersUnblocked = await User.find({blocked:false})
    res.json(usersUnblocked)
})
//blocked user
//@put
router.put("/blocked/:id",async(req,res)=>{
    const userUpdate = await User.findOneAndUpdate({_id:req.params.id},{$set:{blocked:true}},{new:true})
    res.json(userUpdate)
    console.log(userUpdate)
})

//unblocked user  
//@put
router.put("/unblocked/:id",async(req,res)=>{
    const userUpdate = await User.findOneAndUpdate({_id:req.params.id},{$set:{blocked:false}},{new:true})
    res.json(userUpdate)
    console.log(userUpdate)
})
//update user
//@put
router.put("/:id",async(req,res)=>{
    const userUpdate = await User.findOneAndUpdate({_id:req.params.id},{$set:req.body},{new:true})
    res.json(userUpdate)
    console.log(userUpdate)
})
// get one  user by id
// @ get 
router.get("/:id",async(req,res)=>{
    const user = await User.findById({_id:req.params.id})
    console.log(user)
    res.json(user)
});
  
// add one user 
//@ post 
 router.post("/", async(req,res)=>{
    try{ const newUser = await User.create(req.body);
    console.log(newUser)
    res.json(newUser)}catch(err){console.log(err)
    res.json(err.errors)}
   
 })






module.exports = router;
