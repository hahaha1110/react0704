import React, {Component} from 'react';

class Home extends Component{//원래는 이렇게 하면 안됨 App이 루트니까 컴포넌트의 자식이 되면 안됨
  constructor(props){
    super()
  }
  render (){
    return (
      <div className="wrapper">
        홈
      </div>
    );
  }
}

export default Home;
