import React,{useState, useEffect} from 'react';
import NavbarBlog from '../components/Navbar';
import Blog from '../components/Blog';
import {Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const Blogs =({dataPost})=>{
  return(
    <div>
      <NavbarBlog></NavbarBlog>
      <Container>
        {dataPost.map(post => (
          <Row key={post.id}>
            <Blog id={post.id} owner={post.owner} date={post.created_at} title= {post.title} content={post.content}></Blog>
          </Row>
        ))}
      </Container>
    </div>
  )
}

const mapStateToProps =(state)=>{
  return {
    dataPost : state.dataBlog.dataPost ,
  };
};


export default connect(mapStateToProps)(Blogs);