import './App.css';
import {React, useState, useEffect} from 'react';
import { Route, Switch} from "react-router-dom";
import Blogs from './pages/Blogs';
import BlogContent from './pages/BlogContent';
import Error from './components/Error';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Blogs}></Route>
        <Route exact path='/blog/content' component={BlogContent}></Route>
        <Route component ={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
