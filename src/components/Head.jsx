import React, { Component } from "react";

export class Head extends Component {
    render() {
        return (
            <header className="header">
                <h1>Clickity-Click-Click</h1>
                <h2>Clickity an image. If you have not Clickitied the image before, you get a Click. If you Clickity on an image you've previously Clickitied during the round, you lose, and start a new round.</h2>
            </header>
        );
    }
}
