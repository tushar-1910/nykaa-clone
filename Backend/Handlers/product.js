const Products=require("../Database/product")

async function createProduct(req, res, next) {
    let {product} = req.body;
    //console.log(product)
    product = await Products.create(product);

    return res.send({
        data: product
    })
}

const getAllProducts=async (req,res,next)=>{
     const products=await Products.find();

     if(!products){
       return res.status(404).send({"message":"no data or something wrong"});
     }else{
        return res.status(200).send(products);
     }
}

module.exports ={
    createProduct,
    getAllProducts
}