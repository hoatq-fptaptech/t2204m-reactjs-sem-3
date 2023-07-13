import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavLayout(props){
    return (
        <Nav variant="pills" activeKey="1">
            <Nav.Item>
                <NavLink to="/" className="nav-link">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/category" className="nav-link">Category</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/product" className="nav-link">Product</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
            </Nav.Item>
        </Nav>
    );
}