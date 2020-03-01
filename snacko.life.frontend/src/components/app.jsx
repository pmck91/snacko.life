import React from 'react';
import Parallax from "./common/parallax";
import Navbar from "./navbar";
import sandwich from '../images/sandwhich.jpeg';
import FirstParallaxSection from "./firstParallaxSection";
import SnackSection from "./snackSection";


function App() {
    return (
        <div className="App">

            <Navbar/>

            <FirstParallaxSection/>

            <SnackSection/>

            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">Snacks so easy even <b>YOU</b> can cook them!</h5>
                        </div>
                    </div>
                </div>
                <Parallax imageSrc={sandwich} altText={"Club Sandwich"}/>
            </div>

            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>About Us</h4>
                            <p className="left-align light">This site was started as a sort of personal food blog for
                                all the recipes I cook regularly and any fun new ones I try. I'm not a very good cook
                                but it's something I think everybody should at least try, that's what I did. And It
                                turns out I really enjoy it!</p>
                        </div>
                    </div>

                </div>
            </div>

            <footer className="page-footer deep-orange lighten-2">
                <div className="footer-copyright">
                    <div className="container">
                        Made by <a className="grey-text text-darken-2"
                                   href="www.linkedin.com/in/pmck91">Me</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
