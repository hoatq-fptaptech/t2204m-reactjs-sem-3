import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../services/product.service";

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
        console.log("Count change");
    },[count]);

    useEffect(()=>{
        console.log("Product change");
    },[product]); // did update cua product

    useEffect(()=>{
        console.log("Product - Count change");
    },[product,count]); // did update cua product - count


    return (
        <div>
            <h1>{id} - {product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}
export default ProductDetailPage;