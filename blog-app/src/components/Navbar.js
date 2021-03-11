import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css' 
import {connect} from 'react-redux'

import {Row, Col, Container, Nav, Form, FormControl,Navbar, Button, Alert } from 'react-bootstrap';

const NavbarBlog =({dataUser})=>{
  const [clickToLogin, setClickToLogin] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);

  const [account, setAccount] = useState({});

  const [pass, setPass] = useState('')
  const [user, setUser] = useState('')

  return(
    <div>
  <Navbar bg="dark" variant="dark">
    <Container className="position-relative">
      <Row>
        <Form inline>
            <FormControl onInput={(e)=>console.log(e.target.value)} type="text" placeholder="Search Blog" className="mr-sm-2" />
          <Button onClick={()=>{
            console.log(dataUser)
          }} style={{ color : 'white'}} variant="outline-info">Search</Button>
        </Form>
      </Row>
      <Row>
        <Navbar.Brand href="/" style={{fontSize : '22px', fontWeight : 'bold'}}><i style={{marginRight :'6px'}} className="fas fa-blog"></i>Blog</Navbar.Brand>
      </Row>
      <Row >
        <Nav className="mr-auto">
          {successLogin === true ? (
            <span  style={{color : 'white', fontSize : '18px'}}><i class="fas fa-user" style ={{marginRight :'6px'}}></i>{account.name}</span>
          ) : (
            <Button onClick={()=> {
              if(clickToLogin === false) setClickToLogin(true)
              else setClickToLogin(false)
            }} style ={{fontSize : '20px', fontWeight : '700'}}>Login</Button>
          )}
          {clickToLogin === true ? (
            <Container className="position-absolute" style ={{width : '50%', top : '128%', left : '64%'}}>
              <Col>
                <FormControl placeholder="Username" onInput ={(e)=>{
                  setUser(e.target.value)
                }}></FormControl>
              </Col>
              <Col>
              <FormControl type="password" onInput ={(e)=>{
                setPass(e.target.value)
              }} placeholder="Password"></FormControl>
              </Col>
              <Button onClick={()=>{
                if(dataUser.filter(data => data.username === user && data.password === pass).length > 0) {
                  setSuccessLogin(true)
                  setAccount(dataUser.find(data => data.username === user && data.password === pass))
                  setClickToLogin(false)
                }
                else{ 
                  setSuccessLogin(false)
                  setAccount({})
                }
              }}>Login</Button>
            </Container>
          ) : (<div></div>)}
        </Nav>
      </Row>
    </Container>
  </Navbar>
</div>
  )
}

const mapStateToProps =(state)=>{
  return {
    dataUser : state.dataBlog.dataUser ,
  };
};

export default connect(mapStateToProps)(NavbarBlog);