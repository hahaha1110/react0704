import React,{Component} from 'react';
import {Figure,Table} from 'react-bootstrap';
import logo from '../assets/images/logo.svg'

class Mypage extends Component{
    render(){
        return(
            <div>
                <h2> 마이페이지 </h2>
                <Figure>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={logo}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td rowSpan='2' colSpan='2'>1</td>
                            <td>ID</td>
                            <td>hong</td>
                        </tr>
                        <tr>
                            <td>이름</td>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <td>전화번호</td>
                            <td colSpan='3'>010-1234-5678</td>
                        </tr>
                        <tr>
                            <td>주소(도시)</td>
                            <td colSpan='3'>서울</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Mypage;