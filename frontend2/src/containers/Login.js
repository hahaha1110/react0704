import React, {Component} from 'react';
import {Form,Button} from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            customerId:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
                <Form> 
                    <Form.Group controlId="customerId">
                        <Form.Label>CUSTOMER ID</Form.Label>
                        <Form.Control type="text" placeholder="Customer ID" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="success">전 송</Button>
                    <Button variant="danger">취 소</Button>
                </Form>   
              </form>
                
            </div>
        );
    }
}
export default Login;