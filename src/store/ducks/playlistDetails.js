export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
};

const initialState = {
  data: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
};

export const ActionCreators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),
  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};

export default reducer;
