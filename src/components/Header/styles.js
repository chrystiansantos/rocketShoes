import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 50px 0;
`;

/* Colocando entre parenteses consigo estilizar um  component que nao e nativo
do html */
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  /* Ira fazer com que a opacidade demore 0.2s para mudar */
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
