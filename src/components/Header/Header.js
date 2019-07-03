import React from 'react';

import { Container, Search, User } from './HeaderStyle';

function Header() {
  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>

      <User>
        <img src="https://avatars3.githubusercontent.com/u/23031413?v=4" alt="Avatar" />
        Lucas Mallmann
      </User>
    </Container>
  );
}

export default Header;
