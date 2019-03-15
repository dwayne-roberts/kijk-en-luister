// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, type Match } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import showData from '../data/shows.json';
import episodeData from '../data/episodes.json';
import { bindActionCreators } from 'redux';
import * as PlayerActions from '../actions/playerbar';

const mapDispatchToProps = dispatch => {
  return bindActionCreators(PlayerActions, dispatch);
};
type Props = {
  match: Match,
  setPlayer: (*) => void
};

class Show extends React.Component<Props> {
  render() {
    const { match, setPlayer } = this.props;

    const show = showData.shows.find(
      item => item.slug === match.params.showSlug
    );

    const episodes = episodeData.Clips.filter(
      item => item.showSlug === match.params.showSlug
    );

    return (
      <Container>
        {show ? (
          <React.Fragment>
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <h3>Afleveringen</h3>
            <Episodes>
              {episodes.map((episode, i) => (
                <Card
                  key={i}
                  onClick={() =>
                    setPlayer({
                      type: 'juke',
                      title: episode.Title,
                      src: episode.AudioUrl
                    })
                  }
                >
                  <img width={150} src={episode.ImageUrl} />
                  {episode.Title}
                </Card>
              ))}
            </Episodes>
          </React.Fragment>
        ) : (
          <NotFound>Show is niet gevonden!</NotFound>
        )}
        <Link to="/">Home</Link>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Show)
);

const Container = styled.div`
  padding: 48px;
  height: 100vh;
  overflow: scroll;
  padding-bottom: 80px;
  box-sizing: border-box;
  color: #fff;
`;

const NotFound = styled.div`
  display: flex;
`;

const Episodes = styled.div``;

const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;

  > img {
    margin-right: 16px;
  }
`;
