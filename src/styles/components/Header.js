import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.colors.BlackPrimary};
  color: ${(props) => props.theme.colors.WhitePrimary};
  font-weight: 300;
  z-index: 999;
`;

export const Hamburger = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;

  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 40px;

  span {
    display: block;
    position: relative;
    height: 2.5px;
    width: 30px;
    background-color: ${(props) =>
      props.theme.colors.WhitePrimary};
    transition: 0.5s ease-in-out;
  }
  span:before,
  span:after {
    display: block;
    position: absolute;
    height: 2.5px;
    width: 30px;
    background-color: ${(props) =>
      props.theme.colors.WhitePrimary};
    transition: 0.5s ease-in-out;
    content: "";
  }

  span {
    transform: ${({ open }) =>
      open ? "rotate(45deg)" : "rotate(0deg)"};
  }

  span:before {
    transform: ${({ open }) =>
      open ? "translateX(-45deg)" : "translateX(0deg)"};
    top: ${({ open }) => (open ? "0px" : "-10px")};
  }

  span:after {
    transform: ${({ open }) =>
      open ? "rotate(-90deg)" : "rotate(0deg)"};
    bottom: ${({ open }) => (open ? "0px" : "-10px")};
  }

  @media (max-width: 768px) {
    display: flex;
    z-index: 999;
  }

  @media (max-width: 450px) {
    z-index: 999;
  }
`;

export const NavegationBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  .logo {
    width: 80px;
    height: 32px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 55px;
    left: 0px;
    width: 100%;
    z-index: 998;
    padding: 15px;

    background-color: ${(props) =>
      props.theme.colors.BlackPrimary};

    animation: 1.5s forwards
      ${({ open }) => (open ? "opening" : "closeing")};

    @keyframes opening {
      from {
        top: -500px;
      }
      to {
        top: 50px;
      }
    }

    @keyframes closeing {
      from {
        top: 50px;
      }
      to {
        top: -500px;
      }
    }
  }
`;

export const Categories = styled.div`
  position: relative;
  margin: 0px 7px;
  padding: 3px;

  & :nth-child(1) {
    display: flex;
    cursor: pointer;
  }
  .triangulo {
    transform: ${({ openCategories }) =>
      openCategories ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 300ms;
    margin: 5px 5px 5px 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid
      ${(props) => props.theme.colors.WhitePrimary};
  }

  .dropdown {
    position: absolute;
    display: ${({ openCategories }) =>
      openCategories ? "flex" : "none"};
    flex-direction: column;

    width: 167px;

    padding: 7px;
    margin-top: 12px;
    border-radius: 4px;
    transform: translateX(-15%);

    color: ${(props) => props.theme.colors.BlackPrimary};
    background: ${(props) =>
      props.theme.colors.WhitePrimary};
    transition: 300ms;
    span {
      cursor: pointer;
      font-weight: lighter;

      padding: 5px;
      border-bottom: 1px solid
        ${(props) => props.theme.colors.WhiteTertiary};
    }

    span:hover {
      transform: scale(1.05);
    }

    & :last-child {
      border: none;
    }
  }

  @media (max-width: 768px) {
    transform: translateY(35px);
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 32px;
  width: 350px;

  padding: 3px;
  margin: 0px 7px;
  border-radius: 4px;

  background: ${(props) => props.theme.colors.WhitePrimary};

  & :nth-child(1) {
    padding: 3px;
    outline: none;
    border: none;
  }

  & :nth-child(2) {
    cursor: pointer;
    height: 24px;
    width: 24px;
    color: ${(props) => props.theme.colors.BlackPrimary};
  }

  @media (max-width: 768px) {
    transform: translateY(-25px);
  }

  @media (max-width: 450px) {
    transform: translateY(-35px);
    width: auto;
  }
`;

export const Account = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  margin: 0px 7px;

  & :nth-child(2) {
    object-fit: cover;
    height: 18px;
    width: 18px;
    color: ${(props) => props.theme.colors.WhitePrimary};
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;

  margin: 0px 7px;
  cursor: pointer;

  & :nth-child(2) {
    object-fit: cover;
    height: 16px;
    width: 16px;
    color: ${(props) => props.theme.colors.WhitePrimary};
  }
`;