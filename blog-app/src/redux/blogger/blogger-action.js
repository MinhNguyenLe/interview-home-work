import * as actionTypes from './blogger-type';

export const searchBlog =(value)=>{
  return {
    type : actionTypes.SEARCH_BLOG,
    payload :{
      name : value
    }
  }
}

export const detailBlog =(id)=>{
  return {
    type : actionTypes.DETAIL_BLOG,
    payload :{
      id : id
    }
  }
}