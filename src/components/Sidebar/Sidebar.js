import React from 'react';

import { Container, NewPlaylist, Nav } from './SidebarStyle';

import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Sua biblioteca</span>
        </li>
        <li>
          <a href="">Seu Daily Mix</a>
        </li>
        <li>
          <a href="">Tocados Recentemente</a>
        </li>
        <li>
          <a href="">Músicas</a>
        </li>
        <li>
          <a href="">Álbuns</a>
        </li>
        <li>
          <a href="">Artistas</a>
        </li>
        <li>
          <a href="">Estações</a>
        </li>
        <li>
          <a href="">Arquivos Locais</a>
        </li>
        <li>
          <a href="">Vídeos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a href="">Melhores do Rock</a>
        </li>
        <li>
          <a href="">Eden</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
