import { Nav } from "react-bootstrap";

export default function NavLayout(props){
    return (
        <Nav variant="pills" activeKey="1">
            <Nav.Item>
                <Nav.Link eventKey="1" href="/">
                Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="2" href="/category">
                Category
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="3" href="/product">
                Product
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}