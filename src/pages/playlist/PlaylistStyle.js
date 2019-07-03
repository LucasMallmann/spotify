import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 200px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    h1 {
      font-size: 48px;
      margin-top: 10px;
    }

    p {
      margin-top: 0;
      color: #b3b3b3;
      letter-spacing: 1.11px;
      text-transform: uppercase;
      font-size: 11px;
    }

    button {
      background: #1de854;
      height: 32px;
      border-radius: 16px;
      color: #fff;
      line-height: 32px;
      padding: 0 35px;
      border: 0;
      margin-top: 10px;
      letter-spacing: 1.11px;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: 11px;
    letter-spacing: 1.11px;
    color: #b3b3b3;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }

  tbody td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }

  tbody tr:hover td {
    background: #282828;
  }
`;
