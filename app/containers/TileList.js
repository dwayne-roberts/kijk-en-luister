import React, { Component } from 'react';
import styled from 'styled-components';
import ShowTile from '../components/ShowTile';

const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  text-align: center;
`;

const List = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px;
  margin: 0;
  margin-bottom: 20pc;
`;
List.displayName = 'List';


export default class TileList extends Component {
  static defaultProps = {
    items: [],
  }

  render() {
    const { items } = this.props;

    return (
      <Wrapper>
        <List>
          {items.map((episode, idx) => <ShowTile episode={episode} />)}
        </List>
      </Wrapper>
    );
  }
}
