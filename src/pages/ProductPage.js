import React from "react";
import { Col, Row} from "react-bootstrap";
import ProductGrid from "../components/productgrid";
import axios from "axios";
export default class ProductPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
      
    }
    componentDidMount(){
        const url = "https://dummyjson.com/products?limit=12";
        // fetch(url).then(rs=>rs.json())
        // .then(rs=>{
        //    this.setState({products:rs.products});     
        // })
        // .catch(err=>{

        // })
        axios.get(url)
        .then(rs=>{
            this.setState({
                products: rs.data.products
            })
        })
        .catch(err=>{

        })
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
                                <ProductGrid image={e.thumbnail} title={e.title} text={e.description}/>
                            </Col>
                        )
                    })
                }
                
            </Row>
            </div>
        )
    }
}