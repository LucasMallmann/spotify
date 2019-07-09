export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const initialState = {
  data: [],
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
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};

export default reducer;
