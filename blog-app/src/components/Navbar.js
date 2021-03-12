import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import {searchBlog } from '../redux/blogger/blogger-action';

import {Row, Col, Container, Nav, Form, FormControl,Navbar, Button } from 'react-bootstrap';

const NavbarBlog =({dataUser,search, dataPost})=>{
  const [clickToLogin, setClickToLogin] = useState(false);
  const [successLogin, setSuccessLogin] = useState(false);

  const [account, setAccount] = useState({});

  const [pass, setPass] = useState('')
  const [user, setUser] = useState('')

  const [searchInput, setSearchInput] = useState('');

  return(
    <div>
  <Navbar bg="dark" variant="dark">
    <Container className="position-relative">
      <Row>
        <Form inline>
            <FormControl onInput={(e)=>setSearchInput(e.target.value)} type="text" placeholder="Search Blog" className="mr-sm-2" />
            <Button onClick={(e)=>{
              if(dataPost.map(data => data.title.toLowerCase() === searchInput.trim().toLowerCase())){
                search(searchInput)
              }
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
            <Container className="position-absolute" style ={{width : '50%', top : '140%', left : '53%'}}>
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
    dataPost : state.dataBlog.dataPost ,
  };
};

const mapDispatchToProps =(dispatch)=>{
  return {
    search :  (value) =>dispatch(searchBlog(value)),
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(NavbarBlog);