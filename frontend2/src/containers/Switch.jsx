import React, {Component} from 'react'

class Switch extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            power : false
        }
    }
    handleClick(){
        this.setState({
            power : !this.state.power
        })
    }
    render(){
        return(  
            <div>
               <p>Switch {this.state.power? 'ON':'OFF'}</p>
               <button onClick={this.handleClick}>switch</button>
            </div>
        )
    }
}
export default Switch