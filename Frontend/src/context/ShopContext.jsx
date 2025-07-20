import { createContext, useEffect, useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";


 const backendURL =import.meta.env.VITE_BACKEND_URL;

 export const ShopContext=createContext();
 const ShopContextProvider=(props)=>{
    const currency='$';
    const [search,setSearch]=useState('')
    const [Products, setProducts] = useState([])
    const [showSearch,setShowSearch]=useState(false)
    const delivery_fee=10;
    const [CartItem, setCartItem] = useState({})
    

    const AddToCart = (itemId, size)=> {
              let cartData = structuredClone(CartItem);
              if (cartData[itemId]) {
                if (cartData[itemId][size]) {
                    cartData[itemId][size]+=1      
                }
                else{
                    cartData[itemId][size] = 1;
                }      
            }
            else{
                cartData[itemId] = {};
                cartData[itemId][size] = 1;

            }
            setCartItem(cartData)
    }
    const GetCartData = ()=>{
        let totalCount = 0;
        for(const items in CartItem)
            for(const item in CartItem[items]){
        if (CartItem[items][item]>0) {
            totalCount+=CartItem[items][item]
            
        }
        }
        return totalCount
     }
 const fetchProducts = async()=>{
    try {
        const response = await axios.get(backendURL + "/api/product/list")
        if (response.data.success) {
        setProducts(response.data.products)     
        } else {
            toast.error(response.data.message) 
               }
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
        
    }
 }
 useEffect(()=>{
fetchProducts()
 },[])
 
    const value={
        Products,
        currency,
        delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        AddToCart,GetCartData,backendURL
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }
 export default ShopContextProvider;