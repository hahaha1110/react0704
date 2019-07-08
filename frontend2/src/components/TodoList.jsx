import React from 'react'
const TodoList = (props) =>{
    return(
        <ul>
            {props.items.map(item => (
                <li key = {item.id} > {item.text}</li>
            ))}
        </ul>
    );
}
//상태가 없어서 class가 아님 람다로 바꾸기
// class TodoList extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <ul>
//                 {this.props.items.map(item => (
//                     <li key = {item.id} > {item.text}</li>
//                 ))}
//             </ul>
//         );
//     }
// }
export default TodoList;