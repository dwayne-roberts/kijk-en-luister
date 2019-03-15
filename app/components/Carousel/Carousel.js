import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
  background: 'none';
  position: relative;
  margin: 0;

  .slick-slider {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    display: block;
    position: relative;
    touch-action: pan-y;
    user-select: none;

    .slick-track,
    .slick-list {
      transform: translate3d(0, 0, 0);
    }
  }

  .slick-list {
    display: block;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;

    &:focus {
      outline: none;
    }

    &.dragging {
      cursor: pointer;
      cursor: hand;
    }
  }

  .slick-track {
    display: block;
    left: 0;
    position: relative;
    top: 0;

    &:before,
    &:after {
      display: table;
      content: '';
    }

    &:after {
      clear: both;
    }
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;

    img {
      display: block;
    }

    &.slick-loading img {
      display: none;
    }

    &.dragging img {
      pointer-events: none;
    }
  }

  [dir='rtl'] .slick-slide {
    float: right;
  }

  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-slide,
  .slick-slide > div {
    display: inline-flex !important;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default class Carousel extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    const settings = {
      dots: false,
      arrows: false,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      accessibility: true
    };

    const { children } = this.props;
    return (
      <Wrapper>
        <Slider {...settings}>{children}</Slider>
      </Wrapper>
    );
  }
}
