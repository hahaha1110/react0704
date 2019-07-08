import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';


class Join extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId:'',
            password:'',
            customerName:'',
            phone:'',
            city:''
        }
    }
    render(){
        return(
            <div>
                <h2>Join</h2>
                <Form> 
                    <Form.Group controlId="customerId">
                        <Form.Label>CUSTOMER ID</Form.Label>
                        <Form.Control type="text" placeholder="Customer ID" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="customerName">
                        <Form.Label>customerName</Form.Label>
                        <Form.Control type="text" placeholder="customerName" />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="text" placeholder="phone" />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label>city</Form.Label>
                        <Form.Control type="text" placeholder="city" />
                    </Form.Group>
                    <Button variant="success">전 송</Button>
                    <Button variant="danger">취 소</Button>
                </Form>  
            </div>
        );
    }
}
export default Join;
