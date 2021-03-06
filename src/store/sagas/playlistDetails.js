import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { ActionCreators as PlaylistDetailsActions } from '../ducks/playlistDetails';
import { ActionCreators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);
    console.tron.log(response);
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Não foi possível obter os detalhes da playlist'));
  }
}
