import { useState } from "react";

import {
  Container,
  NavegationBar,
  Menu,
  Hamburger,
  Categories,
  Search,
  Account,
  Cart,
} from "../styles/components/Header";

import ImageLogo from "../assets/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  const [openCategories, SetOpenCategories] = useState(
    false
  );

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <NavegationBar>
        <img className="logo" src={ImageLogo} alt="" />
        <Menu open={open}>
          <Categories openCategories={openCategories}>
            <div
              onClick={() => {
                SetOpenCategories(!openCategories);
              }}
            >
              <span> Categorias </span>
              <span className="triangulo" />
            </div>
            <div className="dropdown">
              <span>Livros</span>
              <span>Escritório</span>
              <span>Vestuário</span>
              <span>Informática</span>
            </div>
          </Categories>
          <Search>
            <input type="text" name="Search" id="Search" />
            <SearchIcon />
          </Search>
          <Account>
            <span>Minha conta</span>
            <PersonIcon />
          </Account>
          <Cart>
            <span>Carrinho(2)</span>
            <ShoppingCartIcon />
          </Cart>
        </Menu>
        <Hamburger
          open={open}
          onClick={() => setOpen(!open)}
        >
          <span />
        </Hamburger>
      </NavegationBar>
    </Container>
  );
};
export default Header;
