import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class GridDemo extends Component {
	render() {
		return <Grid>
		  <Row className="show-grid">
		    <Col xs={4}>xs=4</Col>
		    <Col xs={8}>xs=8</Col>
		  </Row>
		  <Row className="show-grid">
		    <Col xs={6} xsOffset={2}>xs=6 xsOffset=2</Col>
		  </Row>
		</Grid>;
	}
};