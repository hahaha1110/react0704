import React from 'react';
import PropTypes from 'prop-types';
import User from '../containers/User';
import { connect } from 'react-redux';
import * as actions from '../actions/User'

const UserCompo = ({user}) => {
    return(
        <div>
            <h2>User 컴포넌트</h2>
            <p>User : {user}</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps)=>({
    user : ownProps.user
})

//소괄호가 들어가면 리턴이 생략된것
const mapDispatchToProps = dispatch =>({
    onMount (user){
        dispatch(actions.fetchUser(user))
    },
    onUpdate (user){
        dispatch(actions.fetchUser(user))
    }
})

User.propTypes = {
    user : PropTypes.string,
    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
}

User.defaultProps = {
     /** 기본값으로 apple 에 연결*/
    user : 'apple'
}

// export default User;
export default connect(mapStateToProps, mapDispatchToProps) (UserCompo);