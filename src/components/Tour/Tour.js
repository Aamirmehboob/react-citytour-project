import React, { Component } from 'react'
import './Tour.scss';
export default class Tour extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        });
    }
    render() {
        const {id, img, city, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt="city tour image" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h2>{city}</h2>
                    <h3>{name}</h3>
                    <h4>info {" "}
                        <span onClick={this.handleInfo}><i className="fas fa-caret-square-down" /></span>
                    </h4>
                    {this.state.showInfo && <p>{info}</p>}
                    

                </div>
            </article>
        )
    }
}
