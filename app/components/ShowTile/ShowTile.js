import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  align-items: flex-start;
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 12px;
  margin: 0;
  margin-bottom: 12px;
  width: 300px;
`;
Card.displayName = 'Card';

const Tile = styled.a`
  cursor: pointer;
  display: block;
  height: 169px;
  margin-top: -12px;
  margin-left: -12px;
  margin-right: -12px;
  margin-bottom: 12px;
  overflow: hidden;
  position: relative;
  width: 300px;
`;
Tile.displayName = 'Tile';

const Image = styled.img`
  border-bottom: 3px ${props => props.borderColor} solid;
  display: block;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;
Image.displayName = 'image';

const Program = styled.div`
  color: ${props => props.color};
  display: block;
  font-family: 'Helvetica Neue, Arial, sans-serif';
  font-size: 14x;
  text-transform: uppercase;
  line-height: 1;
`;
Program.displayName = 'Program';

const Title = styled.div`
  color: black;
  display: block;
  font-family: 'Helvetica Neue, Arial, sans-serif';
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`;
Title.displayName = 'Title';

const DateTime = styled.div`
  color: black;
  display: block;
  font-family: 'Helvetica Neue, Arial, sans-serif';
  font-size: 12px;
  line-height: 1.2;
  opacity: 0.7;
  text-transform: uppercase;
`;
DateTime.displayName = 'DateTime';


export default class ShowTile extends Component {
  static defaultProps = {
    episode: {
      image: 'https://placekitten.com/300/169',
      title: 'Titel',
      program: 'Programma',
      uri: 'http://www.google.nl',
      themeColor: '#00aeef',
      date: 'Vrijdag 15 Maart 2019, 15:15 uur',
    },
  };

  static propTypes = {};

  render() {
    const { episode, isPlaying } = this.props;

    return (
      <Card>
        <Tile
          href={episode.uri}
          target="_blank"
          rel="noopener noreferer"
        >
          <Image
            src={ episode.image ? episode.image : 'https://via.placeholder.com/300x169'}
            alt={episode.title}
            borderColor={episode.themeColor}
          />
        </Tile>
        <Program color={episode.themeColor}>{episode.program}</Program>
        <Title>{episode.title}</Title>
        <DateTime>{episode.date}</DateTime>
      </Card>
    );
  }
}
