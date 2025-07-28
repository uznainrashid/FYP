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

}
//  all orders Data for Admin Panel
const AllOrder = async (req,res) => {
    
}

// All the order are frontend
const userOrder = async(req,res)=>{
    res.json({
        message:"Api is working"
    })

}
export {
    placeOrder,
    OrderMethodRozarpay,
    OrderMethodStripe,
    AllOrder,
    updateStatus,
    userOrder
}