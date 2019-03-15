import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from '../Slider';

const Wrapper = styled.div`
  align-items: center;
  background: black;
  box-sizing: border-box;
  display: flex;
  min-height: 600px;
  justify-content: center;
  overflow: hidden;
  padding-top: 28px;
  width: 100%;
`;

Wrapper.displayName = 'Wrapper';

export default class Header extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <Slider />
      </Wrapper>
    );
  }
}
