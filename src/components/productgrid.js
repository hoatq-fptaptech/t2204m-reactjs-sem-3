import { Card,Button } from "react-bootstrap"
export default function ProductGrid(props){
    const image = props.image;
    const title = props.title
    const text= props.text;
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}