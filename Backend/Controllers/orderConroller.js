
// API FOR COD
const placeOrder = async(req,res)=>{


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