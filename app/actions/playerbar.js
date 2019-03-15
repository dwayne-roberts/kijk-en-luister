// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';
export const SET_PLAYER = 'SET_PLAYER';

export function togglePlayer() {
  return {
    type: TOGGLE_PLAYER
  };
}

export function setPlayer(video: *) {
  return {
    type: SET_PLAYER,
    payload: video
  };
}
