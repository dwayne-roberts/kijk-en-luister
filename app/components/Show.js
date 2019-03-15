// @flow
import * as React from 'react';
import { withRouter, type Match } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import showData from '../data/shows.json';

type Props = {
  match: Match
};

class Show extends React.Component<Props> {
  render() {
    const { match } = this.props;
    const show = showData.shows.find(
      item => item.slug === match.params.showSlug
    );

    return (
      <Container>
        {show ? (
          <React.Fragment>
            <h2>{show.title}</h2>
            <p>{show.description}</p>
            <h3>Afleveringen</h3>
            <Episodes />
          </React.Fragment>
        ) : (
          <NotFound>Show is niet gevonden!</NotFound>
        )}
        <Link to="/">Home</Link>
      </Container>
    );
  }
}

export default withRouter(Show);

const Container = styled.div``;

const NotFound = styled.div`
  display: flex;
`;

const Episodes = styled.div``;
