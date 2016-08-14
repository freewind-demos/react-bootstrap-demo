import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Layout from './layout.jsx';
import GridDemo from './grid-demo.jsx';
import Form from './form.jsx';
import Buttons from './buttons.jsx';
require('jquery');
require('bootstrap-webpack');

const router = <Router history={hashHistory}>
	<Route path='/' component={Layout}>
		<Route path='grid' component={GridDemo} />
		<Route path='form' component={Form} />
		<Route path='buttons' component={Buttons} />
	</Route>
</Router>;

ReactDOM.render(
  router,
  document.getElementById("content")
);

