/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ActionCreators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './SidebarStyle';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import Loading from '../Loading/Loading';

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    const { data } = playlists;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="">Radio</Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Sua biblioteca</span>
            </li>
            <li>
              <Link to="">Seu DailyLinkMix</Link>
            </li>
            <li>
              <Link to="">Tocados Recentemente</Link>
            </li>
            <li>
              <Link to="">Músicas</Link>
            </li>
            <li>
              <Link to="">Álbuns</Link>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>Playlists</span>
              {playlists.loading && <Loading />}
            </li>
            {data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adicionar playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
