import * as actionTypes from './blogger-type';
import dataUser from '../../data/users.json';
import dataComment from '../../data/comments.json';
import dataPost from '../../data/posts.json';

const INITIAL_STATE={
  dataUser : dataUser,
  dataComment : dataComment,
  dataPost : dataPost,
  detail : {},
};

const bloggerReducer =(state = INITIAL_STATE, action)=>{
  switch(action.type){
    case actionTypes.SEARCH_BLOG :
      return {
        ...state,
        detail : INITIAL_STATE.dataPost.find(post => post.title.toLowerCase() === action.payload.name.trim().toLowerCase()),
        dataPost : INITIAL_STATE.dataPost.filter(post => post.title.toLowerCase() === action.payload.name.trim().toLowerCase()),
      };
    case actionTypes.DETAIL_BLOG :
      return {
        ...state,
        detail : INITIAL_STATE.dataPost.find(post => post.id === action.payload.id),
      };
    default :
      return state;
  }
}

export default bloggerReducer;