import { status } from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
};

const initialState = {
  currentSong: null,
  status: status.PLAYING,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, currentSong: action.payload.song, status: status.PLAYING };
    default:
      return state;
  }
};

export const ActionCreators = {
  loadSong: song => ({ type: Types.LOAD, payload: { message: song } }),
};

export default reducer;
