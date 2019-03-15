import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../Carousel';
import showData from '../../data/shows';

const Wrapper = styled.div`
  align-items: center;
  background: black;
  box-sizing: border-box;
  display: flex;
  min-height: 400px;
  justify-content: center;
  padding-top: 28px;
  width: 100%;
`;

Wrapper.displayName = 'Wrapper';

const Slide = styled(Link)`
  display: flex;
  background: url(${props => props.bg});
  background-size: cover;
  width: 100%;
  align-items: bottom;
  padding: 24px;
  color: #fff;
`;

export default class Header extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Carousel>
        {showData.shows.map((show, i) => (
          <Slide bg={show.img} key={i} to={`/show/${show.slug}`}>
            <h2>{show.title}</h2>
          </Slide>
        ))}
      </Carousel>
    );
  }
}
