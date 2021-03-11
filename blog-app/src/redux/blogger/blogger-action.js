import * as actionTypes from './blogger-type';

export const login =(itemID)=>{
  return {
    type : actionTypes.LOGIN,
    payload :{
      id : itemID
    }
  }
}