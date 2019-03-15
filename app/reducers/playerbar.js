// @flow
import { TOGGLE_PLAYER, SET_PLAYER } from '../actions/playerbar';
import type { Action } from './types';

export default function playerbar(state: * = {}, action: Action) {
  switch (action.type) {
    case TOGGLE_PLAYER:
      return {
        ...state,
        expanded: !state.expanded
      };

    case SET_PLAYER:
      return {
        ...state,
        type: action.payload.type,
        title: action.payload.title,
        src: state.src === action.payload.src ? '' : action.payload.src,
        expanded: true
      };
    default:
      return {
        expanded: false,
        type: '',
        title: '',
        src: ''
      };
  }
}
