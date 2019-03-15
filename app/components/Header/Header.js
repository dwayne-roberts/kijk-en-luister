import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';

const Wrapper = styled.div`
  align-items: center;
  background: black;
  box-sizing: border-box;
  display: flex;
  min-height: 600px;
  justify-content: center;
  padding-top: 28px;
  width: 100%;
`;

Wrapper.displayName = 'Wrapper';

export default class Header extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Carousel>
        <img src="assets/images/coenensander.jpg" alt="" />
        <img src="assets/images/platenbazen.jpg" alt="" />
        <img src="assets/images/veronica-inside.jpg" alt="" />
        <img src="assets/images/undercover.jpg" alt="" />
        <img src="assets/images/frankvisser.jpg" alt="" />
      </Carousel>
    );
  }
}
