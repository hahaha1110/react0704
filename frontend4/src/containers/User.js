import React, {Component} from 'react';
import PropTypes from 'prop-types';


class User extends Component{
    // 컴포넌트가 DOM에 추가되기 직전에 프롭스에 있는 유저 정보를 set하는 것
    UNSAFE_componentWillMount(){
        this.props.onMount(this.props.user);
    }
    // 컴포넌트가 props값을 전달 받았을 때
    // 프랍스에 있는 유저정보가 지금 받은 유저 정보와 다르면 새로운 유저정보로 업데이트 해라
    UNSAFE_componentWillReceiveProps(){
        if(this.props.user !== nextProps.user){
            this.props.onUpdate(nextProps.user)
        }
    }
    render (){
        return(
            <div>
                <h2>User 컴포넌트</h2>
                <p>User : {this.props.user}</p>
            </div>
        );
    }
}

User.propTypes = {
    user     : PropTypes.string,
    onMount  : PropTypes.func.isRequired,
    onUpdate : PropTypes.func.isRequired
}

User.defaultProps = {
    //기본값으로 apple에 연결
    user : 'apple'
}

export default User;
