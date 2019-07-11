import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends Component{
    UNSAFE_componentWillMount(){
        this.props.onMount(this.props.user);
    }
    UNSAFE_componentWillReceiveProps
}