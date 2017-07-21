"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var NavBar = require('./navbar.js');

var Home = React.createClass({
	render: function() {
		return (
			<div className="container">
				<NavBar />
			</div>
		);
	}
});

module.exports = Home;