import React, { Component } from 'react';
// import img from 'images/water.gif';
import './Home.sass';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className='Home'>
            <div className='body'>
            </div>
            <div className='footer'>
              <span className='title'>new port nowhere</span>
              <span className='subtitle'>a blog about nothing</span>
            </div>
          </div>
        );
    }
}