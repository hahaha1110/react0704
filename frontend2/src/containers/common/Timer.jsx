import React, {Component} from 'react'

class Timer extends Component{
    constructor(){
        super()//(props) 생략가능함
        // this.state = '2' 이렇게 줄 수없음 state는 객체이므로
        this.state = {
            seconds : 0
        };
    }
    tick(){
        this.setState(state => ({
            seconds : state.seconds + 1
        }));
    }
    componentDidMount(){//훅
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {//훅
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>
                Second : {this.state.seconds}
            </div>
        );
    }
}
export default Timer