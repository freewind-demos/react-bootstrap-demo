import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Layout extends Component {
	render() {
		return <div>
			<div>
				<ul>
					<li><Link to='/grid'>Grid</Link></li>
					<li><Link to='/buttons'>Buttons</Link></li>
					<li><Link to='/form'>Form</Link></li>
				</ul>
			</div>
			<div>{this.props.children}</div>
		</div>;
	}
};