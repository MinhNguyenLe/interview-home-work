import * as actionTypes from './blogger-type';
import dataUser from '../../data/users.json';
import dataComment from '../../data/comments.json';
import dataPost from '../../data/posts.json';

const INITIAL_STATE={
  dataUser : dataUser,
  dataComment : dataComment,
  dataPost : dataPost
};

const bloggerReducer =(state = INITIAL_STATE, action)=>{
  switch(action.type){
    case actionTypes.LOGIN :
      return {};
    default :
      return state;
  }
}

export default bloggerReducer;