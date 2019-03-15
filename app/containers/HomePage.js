import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import TileList from '../containers/TileList';
import data from '../data/episodes';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <TileList items={data.shows} />
      </Fragment>
    );
  }
}
