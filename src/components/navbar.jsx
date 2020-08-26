import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        const{totalCounters} = this.props;

        return ( 

            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Total Counters
                    <span className="badge badge-pill badge-secondary m-2">{totalCounters}</span>
                </a>
            </nav>
         );
    }
}
 
export default NavBar;