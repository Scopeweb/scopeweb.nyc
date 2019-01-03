import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NavLightContact from '../../NavLightContact/NavLightContact';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="menu" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                    <ul>
                        {/* <div className="uk-navbar-item">
                            <li><NavLink to='/about' activeClassName="uk-active">About</NavLink></li>
                        </div> */}
                        <div className="uk-navbar-item">
                            <li><NavLink to='/our-process' activeClassName="uk-active">Our Process</NavLink></li>
                        </div>
                        <div className="uk-navbar-item">
                            <li><a href="https://medium.com/scopeweb" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        </div>
                        <NavLightContact />
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Menu;
