import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailProduct } from "../services/product.service";

function ProductDetailPage(){
    const {id} = useParams("id");
    const [product,setProduct] = useState({});

    const find = async ()=>{
        const p = await detailProduct(id);
        setProduct(p);
    }

    useEffect(()=>{
        // call api -> set data product
        find();
    },[]); // component did mount

    return (
        <div>
            <h1>{id} - {product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}
export default ProductDetailPage;