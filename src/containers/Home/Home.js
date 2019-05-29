import React, { Component } from 'react';
import './Home.sass';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className='Home'>
            <div className='row body'>
              <div className='test' />
            </div>
            <div className='row footer'>
              <span className='title'>new port nowhere</span>
              <span className='subtitle'>a blog about nothing</span>
            </div>
          </div>
        );
    }
}