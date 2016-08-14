import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Checkbox, Button} from 'react-bootstrap';

export default class Form extends Component {
	render() {
		return <form>
			<FormGroup>
				<ControlLabel>User Name</ControlLabel>
				<FormControl type="text" placeholder="Username"></FormControl>
			</FormGroup>
			<FormGroup>
			  <ControlLabel>Password</ControlLabel>
			  <FormControl type="password" />
			</FormGroup>
			<FormGroup>
			  <ControlLabel>Description</ControlLabel>
			  <FormControl componentClass="textarea" placeholder="my description" />
			</FormGroup>
			<Checkbox checked onChange={this._onChange.bind(this)}>remember me</Checkbox>
      <Button type="submit">Submit</Button>
		</form>;
	}

	_onChange() {
		// required, but do nothing here
	}
};