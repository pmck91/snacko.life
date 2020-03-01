import React, {Component} from 'react';
import M from 'materialize-css';

export default class Parallax extends Component {
    componentDidMount() {
        this.initParallax();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.initParallax();
    }

    componentWillUnmount() {
        this._parallax.destroy();
    }

    initParallax = () => {
        M.Parallax.init(this.parallax);
        this._parallax = M.Parallax.getInstance(this.parallax);
    };

    render() {

        const {imageSrc, altText} = this.props;

        return (
            <div ref={(parallax) => this.parallax = parallax} className="parallax">
                <img src={imageSrc} alt={altText}/>
            </div>
        );
    }
}