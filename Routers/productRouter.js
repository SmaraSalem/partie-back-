const express = require("express");
const Product = require("../Models/productModel");
const router = express.Router();

// add one product
//@post
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log(newProduct);
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.json(err.errors.name.message);
  }
});
//get all products
//@get
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.json(products);
  } catch (err) {
    res.json(err);
  }
}
);
//get products by name
//@get
router.get("/name/:name", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.json(products.filter(e=>e.name.includes(req.params.name)));
  } catch (err) {
    res.json(err);
  }
}
);

//get products by category
//@ get
router.get("/category/:nom", async (req, res) => {
  const products = await Product.find({ category: req.params.nom });
  res.json(products);
});




router.put('/like',(req,res)=>{
  
   const {idProduct,idUser}=req.body

    Product.updateOne({_id:idProduct},{$push:{userlike:idUser}}).then(()=>{res.json("ok")}
    
    )

})
  //dislike product
  //@put
router.put('/dislike',(req,res)=>{
    Product.updateOne({_id:req.body.idProduct},{$pull:{userlike:req.body.idUser}}).then(()=>
    console.log())
    res.json("ok")

})
  

//get product by id
//@get
router.get("/:id", async (req, res) => {
  const product = await Product.findById({ _id: req.params.id });
  res.json(product);
});
//delete product by id 
//@delete

router.delete('/:id', async(req,res)=>{
 const result = await Product.remove({_id:req.params.id});
 res.send(result)
 console.log(result)
})

//update products by id
//@put
router.put("/:id", (req, res) => {
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  ).then((data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
