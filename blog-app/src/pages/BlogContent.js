import React,{useState} from 'react';
import NavbarBlog from '../components/Navbar'
import { connect } from 'react-redux';
import {Row, Button, Card, Container } from 'react-bootstrap';
import Comment from '../components/Comment'

const BlogContent =({detail,dataComment})=>{
  const [showCmt, setShowCmt] = useState(false)

  const thisDate = new Date(detail.created_at)
  function nameMonth(){
    switch(thisDate.getMonth()){
      case 0 : return  'January';
      case 1: return  'February';
      case 2 : return  'March';
      case 3: return  'April';
      case 4: return  'May';
      case 5: return  'June';
      case 6: return  'July';
      case 7: return  'August';
      case 8: return 'September';
      case 9: return  'October';
      case 10: return 'November';
      case 11: return  'December'
      default : break;
    }
  }

  const arrayCmt = dataComment.filter(data => data.post === detail.id)
  
  return(
    <div>
      <NavbarBlog></NavbarBlog>
      <Container>
        <Card style={{marginTop : '60px', cursor : 'pointer'}}>
          <Card.Title style={{fontSize : '40px'}} className='text-center'>{detail.title}</Card.Title>
          <Card.Subtitle style={{marginTop : '8px'}}>Author : {detail.owner}</Card.Subtitle>
          <Card.Subtitle style={{marginTop : '0px'}}>Created at : {nameMonth()} {thisDate.getDate()}, {thisDate.getFullYear()}</Card.Subtitle>
          <Card.Text style={{marginTop : '20px'}}>{detail.content}</Card.Text>
          <Button onClick={()=>{
            console.log(arrayCmt)
            if(showCmt === false) setShowCmt(true);
            else setShowCmt(false);
          }} style={{width : '100px'}}>{arrayCmt.length} {arrayCmt.length > 1 ? 'replies' : 'reply'}</Button>
          {showCmt === true ? (
            <div>
            {arrayCmt.map(cmt => (
              <Row key={cmt.id} style={{marginLeft : '0px'}}>
                <Comment dateCmt={cmt.created_at} contentCmt={cmt.content} ownerCmt={cmt.owner}></Comment>
              </Row>
            ))}
            </div>
          ) : (
            <div></div>
          )}
        </Card>
      </Container>
    </div>
  )
}

const mapStateToProps =(state)=>{
  return {
    dataComment : state.dataBlog.dataComment ,
    detail : state.dataBlog.detail
  };
};


export default connect(mapStateToProps)(BlogContent);