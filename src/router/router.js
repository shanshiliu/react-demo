/*路由*/

import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import  Child from '../components/child';
import  List from '../components/list';
import  Home from '../components/home';
import  State from '../components/state';
import  Test from '../components/test';
import  Game from '../game/game.js';
import App from '../App';

const myRouter = () => (
  <Router>
    <div>
    	<div className='nav'>
				<Link to="/">首页</Link><br/>
        <Link to="/child">篮球</Link>       <Link to="/list">传奇</Link><br/>
        <Link to="/home">个人</Link>       <Link to="/state">信息</Link><br/>
		  </div>
      <Route exact path="/" component={App}/>
      <Route exact path="/child" component={Child}/>
      <Route exact path="/list" component={List}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/state" component={State}/>
      <Route exact path="/test" component={Test}/>
      <Route exact path="/game" component={Game}/>
    </div>
  </Router>
)

export default myRouter;