import { Card,Button } from "react-bootstrap"
import { NavLink } from "react-router-dom";
export default function ProductGrid(props){
    const image = props.image;
    const title = props.title
    const text= props.text;
    const id = props.id;
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>
                    <NavLink to={"/product/"+id}>
                    {title}
                    </NavLink>
                    </Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}