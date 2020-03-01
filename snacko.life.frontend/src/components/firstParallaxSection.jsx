import React, {Component} from 'react';
import Parallax from "./common/parallax";
import burgerBg from "../images/burger-bg.jpg";

export default class FirstParallaxSection extends Component {
    render() {
        return (
            <div id="index-banner" className="parallax-container valign-wrapper">
                <div className="section section-top-margin">
                    <div className="container">
                        <div className="row center">
                            <h1 className="header col s12 center brown-text text-lighten-5">Livin' That Snacko Life</h1>
                            <h5 className="header col s12 light">A journey into the important world of snacks your
                                girlfriend will like. Maybe.</h5>
                        </div>
                    </div>
                </div>
                <Parallax imageSrc={burgerBg} altText={"Burger on table"}/>
            </div>
        );
    }
}