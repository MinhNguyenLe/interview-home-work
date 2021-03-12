import React,{useState} from 'react';
import {Card, Row , Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import Comment from '../components/Comment'
import {detailBlog } from '../redux/blogger/blogger-action';
import {Link} from 'react-router-dom'

const Blog =({title, content, date, owner, dataComment, id, detail})=>{
  const [showCmt, setShowCmt] = useState(false)

  const thisDate = new Date(date)
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

  const arrayCmt = dataComment.filter(data => data.post === id)
  return(
    <Link to='/blog/content' style={{color: 'black', outline : 'none'}}>
      <Card style={{marginTop : '60px', cursor : 'pointer'}}>
        <Card  style={{fontSize : '40px'}} className='text-center' onClick={()=>{
          detail(id)
        }}>{title}</Card>
        <Card.Subtitle style={{marginTop : '8px'}}>Author : {owner}</Card.Subtitle>
        <Card.Subtitle style={{marginTop : '0px'}}>Created at : {nameMonth()} {thisDate.getDate()}, {thisDate.getFullYear()}</Card.Subtitle>
        <Card.Text style={{marginTop : '20px'}}>{content.slice(0,99)}...</Card.Text>
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
    </Link>
  )
}

const mapStateToProps =(state)=>{
  return {
    dataComment : state.dataBlog.dataComment ,
  };
};

const mapDispatchToProps =(dispatch)=>{
  return {
    detail :  (id) =>dispatch(detailBlog(id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Blog);