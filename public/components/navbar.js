"use strict";

var React = require('react');

var NavBar = React.createClass({
	getInitialState: function() {
		return {
			navbar: {brand: {linkTo: "#", text: "Share your food"}, 
					links: [{linkTo: "#despre", text: "Despre"}, {linkTo: "#statistici", text: "Statistici"}, {linkTo: "#rest-ong", text: "Restaurante/ONG-uri"}, {linkTo: "#galerie", text: "Galerie"}, {linkTo: "#harta", text: "Harta"}, {linkTo: "#contact", text: "Contact"}]
					}
		};
	},
  render: function(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand linkTo={this.state.navbar.brand.linkTo} text={this.state.navbar.brand.text} />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.state.navbar.links} />
            <div className="nav navbar-nav navbar-right">
			    <li className="dropdown">
			        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
					<ul id="login-dp" className="dropdown-menu">
						<li>
							<div className="row">
								<div className="col-md-12">
									Login via
									<div className="social-buttons">
										<a href="#" className="btn btn-fb"><i class="fa fa-facebook"></i> Facebook</a>
									</div>
			                           or
									<form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
										<div className="form-group">
											<label className="sr-only" htlmFor="exampleInputEmail2">Email address</label>
											<input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required></input>
										</div>
										<div className="form-group">
											<label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
											<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required></input>
			                                <div className="help-block text-right"><a href="">Forget the password ?</a></div>
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-primary btn-block">Sign in</button>
										</div>
										<div className="checkbox">
											<label>
											<input type="checkbox"> keep me logged-in</input>
											</label>
											</div>
									</form>
								</div>
								<div className="bottom text-center">
									New here ? <a href="#"><b>Join Us</b></a>
								</div>
							</div>
						</li>
					</ul>
			    </li>
			</div>
          </div>
        </div>	      
      </nav>
    );
  }
});

var NavBrand = React.createClass({
  render: function(){
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    ); 
  }
});

var NavMenu = React.createClass({
  render: function(){
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
        );
      }
      else {
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav">
        {links}
      </ul>
    );
  }
});

var NavLinkDropdown = React.createClass({
  render: function(){
    var active = false;
    var links = this.props.links.map(function(link){
      if(link.active){
        active = true;
      }
      return (
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
      );
    });
    return (
      <li className={"dropdown " + (active ? "active" : "")}>
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.text}
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
});

var NavLink = React.createClass({
  render: function(){
    return (
      <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
});

module.exports = NavBar;