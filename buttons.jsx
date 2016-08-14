import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class Buttons extends Component {
	render() {
		return <div>
			<Button>Default</Button>
			<Button bsStyle="primary">Primary</Button>
			<Button bsStyle="success">Success</Button>
			<Button bsStyle="info">Info</Button>
			<Button bsStyle="warning">Warning</Button>
			<Button bsStyle="danger">Danger</Button>
			<Button bsStyle="link">Link</Button>
		</div>;
	}
};