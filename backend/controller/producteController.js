const producte = require('../model/producteModal')

// this funnction workin is  add the producte !
const AddProducte =  async (req,res)=>{
 const {name,categaryId , discount , description, price,color,weight,size}= req.body;
try {
const result = await producte.create({
  name :name,
  categaryId:categaryId,
  size:size,
  discount :discount ,
  price:price,
  color:color,
  weight:weight,
  description:description,
 
 })
 console.log(result)
 res.status(200).send({msg:"Producte add successfully" , error:{},data: result})
}
 catch (error) {
    res.status(400).send({msg:"somthing went wrong " ,error:error})
 }

}

module.exports={AddProducte}