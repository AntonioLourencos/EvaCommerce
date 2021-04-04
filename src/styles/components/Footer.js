import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.BlackPrimary};
  color: ${(props) => props.theme.colors.WhitePrimary};

  font-size: 1rem;
  font-weight: 400;

  .container-options {
    display: flex;
    justify-content: center;

    @media (max-width: 450px) {
      flex-wrap: wrap;
      transform: translateX(5px);
    }
  }

  .tittle {
    color: ${(props) => props.theme.colors.Primary};
    border-bottom: 2px solid ${(props) => props.theme.colors.WhitePrimary};
    padding: 7px;
    margin: 0px 15px;
    width: 150px;

    transform: translateX(40px);
  }
  .ico {
    color: ${(props) => props.theme.colors.Primary};
    height: 24px;
    width: 24px;
    margin: 5px;
    transition: 300ms;
  }

  .ico:hover{
    transform:scale(1.1);
    transition: 300ms;
  }
`;

export const Information = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 7px;
  width: 300px;

  span {
    cursor: pointer;
    margin: 3px;
    width: 150px;
    transition: 300ms;
  }

  span:hover{
    transform:scale(1.1);
    transition: 300ms;
  }
`;

export const Map = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 7px;
  width: 300px;
  font-weight: 300;

  color: ${(props) => props.theme.colors.WhiteTertiary};

  span {
    margin: 3px;
  }
`;

export const Contact = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 7px;
  width: 300px;

  color: ${(props) => props.theme.colors.WhiteTertiary};
  font-weight: 300;

  div {
    display: flex;
    align-items: center;
    padding: 3px;
    & :nth-child(1) {
      height: 16px;
      width: 16px;
    }
    span {
      margin: 3px;
    }
  }
`;
