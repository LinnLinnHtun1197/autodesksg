import React, {Component} from 'react';
// import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return(
            <div className="navbar-fixed">
            <nav>   
                <div className="nav-wrapper">
                    <div className="container">
                    <a className="left brand-logo" href="/developer/documentation">
                        Documentation
                    </a>
                    </div>
                </div>
            </nav>
            </div>
        );
    }
}

export default Header;