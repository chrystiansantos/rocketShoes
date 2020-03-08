import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import Logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      {/* Assim que ele clicar no Link sera redirecionado para a pagina principal */}
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
/* Este state, sera todo o estado do redux, e cart e o nome que eu declarei dentro de
rootReducer */
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
