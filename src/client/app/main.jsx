
/****************************************************************************************

	Copyright (c) 2017, Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../views/home.jsx';
import { Signup, SignupVerify } from '../views/signup.jsx';
import { SignIn } from '../views/signin.jsx';
import { Profile } from '../views/profile.jsx';
import { Experiment } from '../views/experiment.jsx';

import MainStyles from '../styles/app.scss';

/****************************************************************************************/

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (<div>{this.props.children}</div>);
	}
}

/****************************************************************************************/

class App {
	constructor() {
		window.fislab = {
			title: ''
		};

		document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));
	}

	onDOMContentLoaded() {
		this._mainSection = window.document.getElementById('app-main');

		this.render();
	}

	render() {
		ReactDOM.render(
			<BrowserRouter>
				<Main>
					<Route exact={true} path="/" component={Home}/>
					<Route exact={true} path="/registro" component={Signup}/>
					<Route exact={true} path="/registro/verificar/:session/:uvid/:evid/" component={SignupVerify}/>
					<Route exact={true} path="/login" component={SignIn}/>
					<Route exact={true} path="/perfil" component={Profile}/>

					<Route exact={true} path="/temas/:id/simulacion" component={Experiment}/>
				</Main>
			</BrowserRouter>,
			this._mainSection);
	}
}

/****************************************************************************************/

var app = new App();