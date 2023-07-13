import { Card,Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext";
export default function ProductGrid(props){
    const product = props.product;
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
        <Card>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <Card.Title>
                    <NavLink to={"/product/"+product.id}>
                    {product.title}
                    </NavLink>
                    </Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Button onClick={addToCart} variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}