import React from 'react';

// Stateless Functional Component
const NavBar = (props) => {
    console.log('NavBar - Rendered');

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="3">Navbar{" "}
                <span className='badge badge-pill bg-secondary'>{props.totalCounters}</span>
                </a>
                
            </div>
        </nav>
    );
}

export default NavBar;