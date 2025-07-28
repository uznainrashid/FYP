import orderModel from "../Model/orderModel.js";
import userModel from "../Model/UserModel.js"

// API FOR COD
const placeOrder = async (req, res) => {
    try {
        const {userId, items, address, amount} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, {cartData: {}})
        res.json({
            success:true,
            message: "Order Placed"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }


}
// API for StripeMethod
const OrderMethodStripe = async(req,res)=>{

}
// API for RozarPay
const OrderMethodRozarpay = async(req,res)=>{

}
// Admin are check The status and update
const updateStatus = async(req,res)=>{
    try{

        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({
            success:true,
            message: "Update The Status"
        })
    }catch(error){
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
        
    }

}
//  all orders Data for Admin Panel
const AllOrder = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({
            success:true,
            orders
        })
        
        
    } catch (error) {
          console.log(error);
    res.json({
        success:false,
        message:error.message
    })
    }
    
}

// All the order are frontend
const userOrder = async(req,res)=>{
try {
    const {userId} = req.body;
    const orderData = await orderModel.find(userId)
    res.json({
        success:true,
        orderData
    })
    
} catch (error) {
    console.log(error);
    res.json({
        success:false,
        message:error.message
    })
    
    
}

}
export {
    placeOrder,
    OrderMethodRozarpay,
    OrderMethodStripe,
    AllOrder,
    updateStatus,
    userOrder
}