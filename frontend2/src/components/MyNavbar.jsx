import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../containers/customer/Login.jsx';
import Join from '../containers/customer/Join.jsx';
import Mypage from '../containers/customer/Mypage.jsx';
import Home from '../containers/Home.jsx';
import Hello from '../containers/customer/Hello.jsx';
import Switch from '../containers/Switch.jsx'
import Timer from '../containers/common/Timer.jsx'
import Todo from '../containers/common/Todo.jsx'
import Clock from '../containers/common/Clock.jsx'

const MyNavbar = () =>{
    return (
      <Router>
      <Navbar bg = "light" expand = "lg">
      <Navbar.Brand href = "#home">BITCAMP</Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav" />
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "mr-auto">
          <Nav.Link href = "#home">
          <Link to = "/home"> Home</Link>
          </Nav.Link>
          <Nav.Link href = "#link">
          <Link to = "/todo">스케줄러</Link>
            </Nav.Link>
          <Nav.Link href = "#link">
            <Link to = "/hello">Hello</Link>
          </Nav.Link>
          <Nav.Link href = "#link">
            <Link to = "/switch">Switch</Link>
          </Nav.Link>
          <Nav.Link href = "#link">
            <Link to = "/clock">시계</Link>
          </Nav.Link>
          <NavDropdown title = "회원관리" id = "basic-nav-dropdown">
            <NavDropdown.Item href = "#">
              <Link to = "/join">회원가입</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href = "#">
              <Link to = "/login">로그인</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href = "#">
            <Link to = "/mypage">마이페이지</Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href = "#">
            <Link to = "/remove">회원탈퇴</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href = "#">
            <Link to = "/timer">Timer</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type = "text" placeholder = "Search" className = "mr-sm-2" />
          <Button variant   = "outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    <Route path = "/login"  component = {Login}/>
    <Route path = "/join"   component = {Join}/>
    <Route path = "/mypage" component = {Mypage}/>
    <Route path = "/home"   component = {Home}/>
    <Route path = "/hello"  component = {Hello}/>
    <Route path = "/switch" component = {Switch}/>
    <Route path = "/timer"  component = {Timer}/>
    <Route path = "/todo"   component = {Todo}/>
    <Route path = "/clock"  component = {Clock}/>
    </Router>
    )
}

export default MyNavbar