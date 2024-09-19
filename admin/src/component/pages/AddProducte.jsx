import React from 'react'
import"../Css/AddProduct.css"

function AddProducte() {
  return (  
    <div>
     <form className='Form'>

     <div className=''>
     <input    className='Name' placeholder='Enter Product Name'/>    
     <br/>
     <br/>
     <input  className='Discription' placeholder='enter Discription '/>  

     </div>
     </form>
    </div>
  )
}

export default AddProducte
