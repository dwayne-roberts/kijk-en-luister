import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class Slider extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Carousel>
        <div>
          <img src="https://placekitten.com/1280/600" alt="" />
          <h6>Legend 1</h6>
        </div>
        <div>
          <img src="https://placekitten.com/1280/600" alt="" />
          <h6>Legend 1</h6>
        </div>
        <div>
          <img src="https://placekitten.com/1280/600" alt="" />
          <h6>Legend 1</h6>
        </div>
        <div>
          <img src="https://placekitten.com/1280/600" alt="" />
          <h6>Legend 1</h6>
        </div>
        <div>
          <img src="https://placekitten.com/1280/600" alt="" />
          <h6>Legend 1</h6>
        </div>
        <div>
          <img src="https://placekitten.com/1280/600" alt="" />
          <h6>Legend 1</h6>
        </div>
      </Carousel>
    );
  }
}
