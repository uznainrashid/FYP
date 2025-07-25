import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrders = () => {
  const {navigate}=useContext(ShopContext)
  const [method,setMethod]=useState('cod')
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-8 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='w-full flex flex-col gap-4 sm:max-w-[470px]'>
        <div className='text-xl sm:text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='ZipCode' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />

        <div>

        </div>

      </div>
      {/* right side */}
      <div className='mt-2'>
        <div className='mt-2 min-w-80'>
          <CartTotal/>

        </div>
        <div className='mt-1'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* payment method selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400':'' } `}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />

            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-400':'' }`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />

            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3 h-3.5 border rounded-full ${method==='cod'? 'bg-green-400' :'' } `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Cash On Delivery</p>

            </div>
          </div>
          <div className='w-full text-end mt-5'>
           <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>

        </div>
        </div>
        </div>

  )
}

export default PlaceOrders