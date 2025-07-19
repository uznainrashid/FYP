import { createContext, useState } from "react";
import { products } from "../assets/assets";

 export const ShopContext=createContext();
 const ShopContextProvider=(props)=>{
    const currency='$';
    const [search,setSearch]=useState('')
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
    const value={
        products,
        currency,
        delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        AddToCart,GetCartData
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }
 export default ShopContextProvider;