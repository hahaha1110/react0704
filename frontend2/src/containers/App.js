import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello.jsx/index.js.js.js';
import MyNavbar from '../components/MyNavbar.jsx/index.js.js.js';


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
