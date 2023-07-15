import { useContext } from "react";
import UserContext from "../context/userContext";
import { Table } from "react-bootstrap";

const CartPage = (props)=>{
    const {state,dispatch} = useContext(UserContext);
    const cart = state.cart;
    const remove = (p)=>{
        let newCart = [];
        cart.map(e=>{
            if(e.id != p.id){
                newCart.push(e);
            }
        });
        // setState({state,cart:newCart});
        dispatch({type:"UPDATE_CART",payload:newCart});
    }
    return (
        <div>
            <h1>Cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Buy Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    cart.map((e,i)=>{
                      return  (
                        <tr key={i}>
                            <td></td>
                            <td><img src={e.thumbnail} width={50}/></td>
                            <td>{e.title}</td>
                            <td>{e.price}</td>
                            <td>{e.buy_qty}</td>
                            <td><button onClick={()=>remove(e)}>Remove</button></td>
                        </tr>
                      );       
                    })
                    }
                </tbody>
                </Table>
        </div>
    );
}
export default CartPage;