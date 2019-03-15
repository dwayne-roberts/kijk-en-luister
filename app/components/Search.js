import React, { Component } from 'react';
import styled, { css }  from 'styled-components';


const SearchResults = styled.div`
  height: 0%;
  width: 100%;
  background: white;
  color: black;
  position: absolute;
  transition : .3s ease height;
  box-sizing: border-box;

  ${props => props.searchActive && css`
    height: 80%;
    padding: 20px;
  `}
`

export default class Search extends Component<Props> {

  state = {
    initialItems: [
      "Veronica inside",
      "Coen en Sander",
      "De rijdende rechter",
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

  render = () => {
    return (
      <div>
        <input type="text"  placeholder="Search" onFocus={this.setSearchActive} onChange={this.filterList}/>
        <SearchResults
          searchActive={this.state.searchActive}>
          {
          this.state.items.map(function(item) {
            return <li data-category={item} key={item}>{item}</li>
        })
          }
        </SearchResults>
      </div>
    );
  }
};


