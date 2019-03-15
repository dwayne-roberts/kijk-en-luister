// @flow

import * as React from 'react';
import get from 'lodash.get';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import * as PlayerActions from '../actions/playerbar';

type Props = {
  expanded: boolean,
  type: 'kijk' | 'juke' | 'youtube',
  title: string,
  src: string,
  togglePlayer: () => void,
  setPlayer: () => void
};

type State = {};

const mapStateToProps = state => ({
  title: state.playerbar.title,
  type: state.playerbar.type,
  src: state.playerbar.src,
  expanded: state.playerbar.expanded
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(PlayerActions, dispatch);
};

class PlayerBar extends React.Component<Props, State> {
  render() {
    const { expanded, type, src, title, togglePlayer, setPlayer } = this.props;

    return (
      <Container expanded={expanded}>
        <Inner expanded={expanded}>
          <ToggleButton onClick={togglePlayer}>
            {expanded && <i className="fa fa-arrow-up fa-1x" />}
            {!expanded && <i className="fa fa-arrow-down fa-1x" />}
          </ToggleButton>
          <Panel expanded={expanded} contentPanel>
            <Content>
              {type === 'kijk' && <div>Kijk player</div>}
              {type === 'juke' && <div>Kijk player</div>}
              {type === 'youtube' && (
                <YouTube>
                  <iframe
                    src={`https://www.youtube.com/embed/${src}?modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </YouTube>
              )}
            </Content>
          </Panel>
          <Panel expanded={expanded}>
            <Title expanded={expanded}>{title}</Title>
            <Controls>
              <Button>
                <i className="fa fa-step-backward fa-1x" />
              </Button>
              <Button
                onClick={() =>
                  setPlayer({
                    type: 'youtube',
                    title: 'Seth Myers',
                    src: 'CuXlBSuQbMo'
                  })
                }
              >
                <i className="fa fa-play fa-1x" />
              </Button>
              <Button>
                <i className="fa fa-step-forward fa-1x" />
              </Button>
            </Controls>
          </Panel>
        </Inner>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerBar);

const CUBIC = 'cubic-bezier(0.11, 0.67, 0.06, 1.06)';

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${props => (props.expanded ? '100vh' : '60px')};
  background: #fff;
  color: #000;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  transition: height 0.15s ${CUBIC};
  display: ;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${props => (props.expanded ? 'column' : 'row')};
`;

const ToggleButton = styled.button`
  border: 0;
  background: #fff;
  position: absolute;
  left: 50%;
  width: 26px;
  height: 26px;
  margin-left: -10px;
  margin-top: -10px;
  top: 0;
  padding: 0;
  border-radius: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
`;

const Controls = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
`;

const YouTube = styled.div`
  display: flex;

  > iframe {
    height: 100%;
    width: auto;
  }
`;

const Button = styled.button`
  background: none;
  border-radius: 50%;
  color: #000;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;

  :hover {
    background: #eaeaea;
    transition: background 0.15s ${CUBIC};
  }
`;

const Title = styled.h2`
  font-size: ${props => (props.expanded ? '24px' : '10px')};
  transition: all 0.15s ${CUBIC};
  color: #000;
  opacity: ${props => (props.expanded ? '1' : '0.5')};
`;

const Panel = styled.div`
  display: flex;
  width: ${props => (props.expanded ? '100%' : '50%')};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: ${props => (props.expanded && props.contentPanel ? '90vh' : 'auto')};
`;
