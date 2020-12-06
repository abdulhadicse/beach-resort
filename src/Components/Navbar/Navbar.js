import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';

class Navbar extends Component {

    constructor(){
        super();
        this.state={
            isOpen: false
        }
    }

    handleNavbar = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/"><img src={logo} alt="Beach Resort"/></Link>
                            <button onClick={this.handleNavbar} type="button" className="nav-btn"> <FaAlignRight className="nav-icon"/> </button>
                        </div>

                        <ul className={ this.state.isOpen ? "nav-links show-nav" : "nav-links" }>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/rooms">Rooms</Link></li>
                            <li><Link to="*">404 Error</Link></li>
                        </ul>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Navbar;