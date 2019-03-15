import React, { Component } from 'react';
import styled, { css }  from 'styled-components';
import { Link } from 'react-router-dom';

const SearchResults = styled.div`
  height: 0%;
  width: 100%;
  background: white;
  color: black;
  position: absolute;
  transition : display .3s ease height;
  box-sizing: border-box;
  z-index: 10;
  display: none;

  ${props => props.searchActive && css`
    display: block;
    height: 80%;
    padding: 20px;
  `}
`

const Input = styled.input`
  padding: 5px;
  font-size: 15px;
  border-radius: 3px;
  margin: 10px;
  float: right:
  width: 200px;
  display: block;
`

const Close = styled.span `
  float: right;
  cursor: pointer;
`

export default class Search extends Component<Props> {

  state = {
    initialItems: [
      "veronica-inside",
      "coen-en-sander",
      "De-rijdende-rechter",
    ],
    items: [],
    searchActive: false,
  }

  filterList = (event)=> {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      items: updatedList,
    });
  }

  setSearchActive = () => {
    this.setState({
      searchActive: true,
    });
  }

  closeSearch = () => {
    this.setState({
      searchActive: false,
    });
  }

  render = () => {
    return (
      <div>

        <Input type="text"  placeholder="Search" onFocus={this.setSearchActive} onChange={this.filterList}/>
        <SearchResults
          searchActive={this.state.searchActive}>
          <Close onClick={this.closeSearch}>Close</Close>
          {
          this.state.items.map(function(item) {
            return <li data-category={item} key={item}><Link  to={`/show/${item}`}>{item}</Link></li>
        })
          }
        </SearchResults>
      </div>
    );
  }
};


