import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../services/product.service";
import UserContext from "../context/userContext";

function ProductDetailPage(){
    const {id} = useParams("id");
    const [product,setProduct] = useState({});
    const [count,setCount] = useState(0);
    const find = async ()=>{
        const p = await detailProduct(id);
        setProduct(p);
    }

    useEffect(()=>{
        // call api -> set data product
        find();
    },[]); // component did mount

    useEffect(()=>{
        // console.log("Count change");
    },[count]);

    useEffect(()=>{
        // console.log("Product change");
    },[product]); // did update cua product

    useEffect(()=>{
        // console.log("Product - Count change");
    },[product,count]); // did update cua product - count
    const {state,setState} = useContext(UserContext);// connect to   global 
    const addToCart = ()=>{
        const cart = state.cart;
        let check = true;
        cart.map(e=>{
            if(e.id == product.id){
                e.buy_qty = e.buy_qty +1;
                check = false;
            }
            return e;
        })
        if(check){
            product.buy_qty = 1;
            cart.push(product);
        }
        setState({...state,cart:cart});
        alert("Đã thêm vào giỏ hàng");
        // state.cart = cart;
        // setState(state);
    }
    return (
        <div>
            <h1>{id} - {product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p><button onClick={addToCart} type="button" className="btn btn-primary">Add To Cart</button></p>
        </div>
    );
}
export default ProductDetailPage;