import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
};

const initialState = {
  currentSong: null,
  status: Sound.status.PLAYING,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    default:
      return state;
  }
};

export const ActionCreators = {
  loadSong: song => ({ type: Types.LOAD, payload: { song } }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
};

export default reducer;
