import React, {Component} from 'react';

export default class ImageCard extends Component {

    render() {

        const {title, image, altText} = this.props;

        return (
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={altText}/>
                    <span className="card-title">{title}</span>
                </div>
            </div>
        );
    }
}