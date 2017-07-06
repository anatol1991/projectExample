import React, {  Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class Header extends Component {
  handleClick() {
    return this;
  }
  render() {
    return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="active"><Link to="/home">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <form className="navbar-form navbar-right">
          <input className="form-control" placeholder="Search" />
          <button className="btn btn-default" type="submit" style={{marginLeft: 5}} onClick={this.handleClick}>Search</button>
        </form>
      </div>
    </nav>
  );
  }
}

export default Header;

export const Home = () => (
  <div style={{marginTop: 100, marginLeft: 400}}>
    <h1>Home...</h1>
  </div>
)

export class Products extends Component {
  render() {
    return (
      <div>
        <h2>Products...</h2>
      </div>
    );
  }
}

export class Servicies extends Component {
  render() {
    return (
      <div>
        <h2>Servicies...</h2>
      </div>
    );
  }
}

export class About extends Component {
  render() {
    return (
      <div>
        <h2>About...</h2>
      </div>
    );
  }
}

export class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact...</h2>
      </div>
    );
  }
}
