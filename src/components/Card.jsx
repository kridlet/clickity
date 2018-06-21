import React, { Component } from "react";

export class Card extends Component {
    constructor(props) {
        super(props);
        this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleCardClick = id => {
        this.props.onCardClick(id);
    }

    render() {
        const divStyle = {backgroundImage: 'url(' + this.props.image + ')'};
        return (
            <div role="img" aria-label="click item" className={this.props.result === -1 ?  "click-item shake" : "click-item"} style={divStyle}  onClick={() => this.handleCardClick(this.props.id)} ></div>
        );
    }
}
