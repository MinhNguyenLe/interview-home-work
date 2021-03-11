import React from 'react';
import {Card , Button } from 'react-bootstrap';

const Comment =({contentCmt, ownerCmt, dateCmt})=>{
  const thisDate = new Date(dateCmt)
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
  return(
    <div>
      <Card.Subtitle><i style={{marginRight:'6px'}} className="fas fa-user-edit"></i>{ownerCmt}</Card.Subtitle>
      <Card.Subtitle></Card.Subtitle>
      <Card.Text>{contentCmt}</Card.Text>
    </div>
  )
}

export default Comment;