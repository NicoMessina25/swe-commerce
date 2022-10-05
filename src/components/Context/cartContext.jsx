import React, { useState, createContext } from "react";

const cartCntx = createContext({});

export default function CartContextProvider({children}){
    const [cart, setCart] = useState([]);

    function addItem(item, count){
        const newCart = [...cart];
        const itemInCart = getItemInCart(item.id);

        if(itemInCart){
            newCart[newCart.indexOf(itemInCart)].count = count;
        } else newCart.push({...item, count});

       
        setCart(newCart);
    }

    function getAmountItemsCart(){
        let amount = 0;
        cart.forEach(i =>{amount += i.count});
        return amount;
    }

    function getTotalCartPrice(){
        let total = 0;
        cart.forEach(i =>{total += i.count*i.price});
        return total;
    }
    
    function getItemInCart(itemId){
        return cart.find(i => i.id === itemId);
    }

    function removeItem(itemId){
        const newCart = [...cart];
        const itemToDelete = getItemInCart(itemId);

        itemToDelete && newCart.splice(newCart.indexOf(itemToDelete), 1);
        setCart(newCart);
    }

    function clear(){
        setCart([]);
    }

    return(
        <cartCntx.Provider value={{addItem, cart, getAmountItemsCart, getTotalCartPrice, removeItem, clear, getItemInCart}}>{children}</cartCntx.Provider>
    );
}
 export {cartCntx};