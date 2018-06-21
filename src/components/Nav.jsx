import React, { Component } from "react";

export class Nav extends Component {
    render () {
        let navMessage;
        let className;
        if (this.props.result === 1) {
            navMessage = "You guessed correctly!";
            className = "correct";
        }
        else if (this.props.result === -1) {
            navMessage = "You guessed incorrectly!";
            className = "incorrect";
        }
        else {
            navMessage = "Click an image to begin!";
        }

        return (
            <nav className="navbar">
                <ul>
                    <li className="brand">Clickity-Click-Click</li>
                    <li className={className}>{navMessage}</li>
                    <li>Clicks: {this.props.currentClicks} | Clicks to Beat: {this.props.highClicks}</li>
                </ul>
            </nav>
        );
    }

}