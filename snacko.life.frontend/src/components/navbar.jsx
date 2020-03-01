import React, {Component} from 'react';
import M from 'materialize-css';
import {Link} from "react-router-dom";

export default class Navbar extends Component {
    componentDidMount() {
        this.initNavbar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.initNavbar();
    }

    componentWillUnmount() {
        this._sideNav.destroy();
    }

    initNavbar = () => {
        M.Sidenav.init(this.sideNav);
        this._sideNav = M.Sidenav.getInstance(this.sideNav);
    };

    handleSubmit = caller => {
        caller.preventDefault();
        console.log(caller.currentTarget);
    };

    render() {
        return (
            <nav className="white" role="navigation">
                <div className="nav-wrapper container">
                    <Link id="logo-container" to="/" className="brand-logo">SnackoLife</Link>
                    <ul className="right hide-on-med-and-down">

                        <li><Link to="/">Recipes</Link></li>
                    </ul>

                    <ul ref={(sideNav) => this.sideNav = sideNav} id="nav-mobile" className="sidenav">

                        <li>
                            <div className="container">
                                <div className="row">
                                    <form action="" onSubmit={this.handleSubmit}>
                                        <div className="input-field">
                                            <input id={"side_search"} type={"text"} placeholder={"Search..."}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/">Recipes</Link></li>
                    </ul>
                    <Link to="" data-target="nav-mobile" className="sidenav-trigger"><i
                        className="material-icons">menu</i></Link>
                </div>
            </nav>
        );
    }
}