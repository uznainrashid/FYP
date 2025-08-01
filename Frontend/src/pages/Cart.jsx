

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
// import CartTotal from '../components/CartTotal'

const Cart = () => {
  const {Products,CartItem,currency,updateQuantity}= useContext(ShopContext)
  const [cartData,setCartData]= useState([])
  useEffect(()=>{
    if(Products.length > 0){
      const tempData=[]
    for(const items in CartItem){
      for(const item in CartItem[items]){
        if(CartItem[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:CartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
    }
    
  },[CartItem,Products])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = Products.find((product)=>product._id===item._id); 
            return(
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>

                    </div>
                  </div>
                </div>
                <input type="number" min={1} defaultValue={item.quantity}
                 className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                 onChange={(e)=>e.target.value===''||e.target.value === '0'? null :updateQuantity(item._id,item.size,Number(e.target.value))}
                />
                <img src={assets.bin_icon} className='w-4 mr-4 sm:mr-5 cursor-pointer' onClick={()=>updateQuantity(item._id,item.size,0)} alt="" />
              </div>
            )

          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>

        </div>

      </div>
    </div>
  )
}

export default Cart