import { useContext } from "react";
import UserContext from "../context/userContext";
import { Table } from "react-bootstrap";

const CartPage = (props)=>{
    const {state,setState} = useContext(UserContext);
    const cart = state.cart;
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