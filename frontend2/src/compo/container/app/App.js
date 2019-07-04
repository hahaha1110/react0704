import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../../present/Hello.js';
import MyNavbar from '../../present/nav/MyNavbar.js';


class App extends Component{//원래는 이렇게 하면 안됨 App이 루트니까 컴포넌트의 자식이 되면 안됨
  constructor(props){
    super()
  }
  render (){
    return (
      <fragment>
        <MyNavbar></MyNavbar>
        <Hello name='홍길동'></Hello>
      </fragment>
    );
  }
}

export default App;
