import {takeEvery, put} from 'redux-saga';

function* searchBlog(){
  yield put({type : 'SEARCH_BLOG', value : 1})
}



export function* watchAgeUp(){
  yield takeEvery('SEARCH_BLOG', searchBlog)
}