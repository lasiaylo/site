import React, { Component } from 'react';
import img from '../../images/water.gif';
import './Home.scss';

let styles = {
    width: "100%",
    height: "100%"
}

export default class Home extends Component {
    constructor(props) {
        super(props);



    }

    render() {

        return <img className="BG" src={img} />;
    }
}