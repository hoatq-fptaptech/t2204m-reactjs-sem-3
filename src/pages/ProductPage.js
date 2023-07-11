import React from "react";
import { Col, Row} from "react-bootstrap";
import ProductGrid from "../components/productgrid";
// import axios from "axios";
// import api from "../services/api";
import { getProduct } from "../services/product.service";
export default class ProductPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[]
        } 
    }
    async componentDidMount(){
        const products = await getProduct(12);
        this.setState({products:products});
    }
    render(){
        const products = this.state.products;
        return (
            <div>
            <h1>Product Page</h1>
            <Row>
                {
                    products.map((e,i)=>{
                        return (
                            <Col key={i} xs={3}>
                                <ProductGrid id={e.id} image={e.thumbnail} title={e.title} text={e.description}/>
                            </Col>
                        )
                    })
                }
                
            </Row>
            </div>
        )
    }
}