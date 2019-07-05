import React, {Component} from 'react';
import '../assets/css/App.css';

import Hello from '../components/Hello';
import MyNavbar from '../components/MyNavbar';
import Login from './Login';
import Join from './Join';
import Mypage from './Mypage';


class App extends Component{//원래는 이렇게 하면 안됨 App이 루트니까 컴포넌트의 자식이 되면 안됨
  constructor(props){
    super()
  }
  render (){
    return (
      <div className="wrapper">
        <MyNavbar/>
      </div>
    );
  }
}

export default App;
