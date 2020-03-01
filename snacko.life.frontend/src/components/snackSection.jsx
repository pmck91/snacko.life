import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ImageCard from "./common/imageCard";
import eggs from "../images/eggs.png";
import burg from "../images/burg.png";
import pancakes from "../images/pancakes.png";

export default class SnackSection extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="section">

                        <div className="row">

                            <div className="col s12 center header ">
                                <h3>
                                    <i className={"material-icons"}>restaurant_menu</i>
                                    &nbsp;Snacks in our Snack Bank&nbsp;
                                    <i className={"material-icons"}>restaurant_menu</i>
                                </h3>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={eggs} title={"Poached Eggs"} altText={"Poached Egg on plate"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={burg} title={"Burgers"} altText={"Juicy looking burger"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={pancakes} title={"Pancakes"} altText={"Pancakes with cream"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={burg} title={"Burgers"} altText={"Juicy looking burger"}/>
                                </Link>
                            </div>


                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={pancakes} title={"Pancakes"} altText={"Pancakes with cream"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={eggs} title={"Poached Eggs"} altText={"Poached Egg on plate"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={eggs} title={"Poached Eggs"} altText={"Poached Egg on plate"}/>
                                </Link>
                            </div>


                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={pancakes} title={"Pancakes"} altText={"Pancakes with cream"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={burg} title={"Burgers"} altText={"Juicy looking burger"}/>
                                </Link>
                            </div>

                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={pancakes} title={"Pancakes"} altText={"Pancakes with cream"}/>
                                </Link>
                            </div>
                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={burg} title={"Burgers"} altText={"Juicy looking burger"}/>
                                </Link>
                            </div>
                            <div className="col s12 m4">
                                <Link to={""}>
                                    <ImageCard image={eggs} title={"Poached Eggs"} altText={"Poached Egg on plate"}/>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}