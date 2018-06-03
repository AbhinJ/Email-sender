import React, { Component } from "react";
import { connect } from "react-redux";
class Header extends Component {
  renderHeader() {
    switch (this.props.auth) {
      case null:
        return "DOnt know";
      case false:
        return "LOgged out";
      default:
        return "logged in";
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="">{this.renderHeader()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
