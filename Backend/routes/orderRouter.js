import express from "express"

import {
    placeOrder,
    OrderMethodRozarpay,
    OrderMethodStripe,
    AllOrder,
    updateStatus,
    userOrder
} from "../Controllers/orderConroller.js"
import authUser from "../Middleware/authUser.js";
import AuthAdminMiddleWare from "../Middleware/AuthAdmin.js";

const orderRouter = express.Router();

// API for orderPlace Method
orderRouter.post("/placeorder", authUser ,placeOrder)
orderRouter.post("/placeorderStripe", authUser ,OrderMethodStripe)
orderRouter.post("/placeorderRozarPay", authUser ,OrderMethodRozarpay)

// API FOR Admin Panel
orderRouter.post("/list",AuthAdminMiddleWare ,AllOrder)
orderRouter.post("/status",AuthAdminMiddleWare, updateStatus)


// API For Frontent all order 
orderRouter.post("/userorders", userOrder)

export default orderRouter