import React, {Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios'

class Login extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            customerId : '',
            password   : ''
        }
    }

        
    
    render(){
        return(
            <div>
                <form onSubmit="{this.handleSubmit}">
                <Form> 
                    <Form.Group controlId="customerId">
                        <Form.Label>CUSTOMER ID</Form.Label>
                        <input type="text" name="customerId" onChange = {this.idChange}/>
                        {/* <Form.Control type="text" placeholder="Customer ID"/> */}
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <input type="text" name="password" onChange = {this.pwChange}/>
                        {/* <Form.Control type="password" placeholder="Password"/> */}
                    </Form.Group>
                    <input type="submit" onClick={this.login} value="테스트"/>
                    <Button variant="success" onClick={this.login}>전 송</Button>
                    <Button variant="danger">취 소</Button>
                </Form>   
              </form>
            </div>
        );
    }
    idChange = e =>{
        this.setState({customerId : e.target.value})
    }
    pwChange = e =>{
        this.setState({password : e.target.value})
    }
    
    login = e => {
        e.preventDefault()

        this.setState({submitted : true})
        const {customerId, password} = this.state
        console.log(`customerId is ${customerId}`)
        console.log(`password is ${password}`)
        
        const data = {
            customerId : this.state.customerId,
            password   : this.state.password        
        }
        
        const headers = {
            'Content-Type': 'application/json',
            'Authorization' : 'JWT fefege..'
          }
        alert('로그인 버튼 클릭 !!'+data.customerId)
        // axios.get(`http://localhost:9000/customers/count`)
        axios.post(`http://localhost:9000/customers/login`,JSON.stringify(data),{headers})
            .then(res => {
                alert(`login 성공`);
            })
            .catch(e=>{
                alert(`login 실패`);
            })
    }
}
export default Login;