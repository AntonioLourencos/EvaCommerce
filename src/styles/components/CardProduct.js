import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Card-Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 350px;
    padding: 10px;
    margin: 5px;
  }
  .Card-Container:hover {
    border: 2px solid ${props => props.theme.colors.Primary};
    border-radius: 4px;
    transition: 100ms
  }

`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img {
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Tittle {
    width: 256px;
    text-align: center;
    color: ${(props) => props.theme.colors.BlackPrimary};
  }

  .Price {
    font-size: 0.9rem;
    text-decoration: line-through;
    font-weight: 300;
    padding: 5px;
    transform: translate(20px, 0px);

    color: ${(props) => props.theme.colors.BlackSecundary};
  }
  .promotionalPrice {
    font-size: 2rem;
    font-weight: 700;
    transform: translateX(-20px);
    color: ${(props) => props.theme.colors.Primary};
  }

  .stars {
    display: flex;
  }

  .star {
    /* color: ${(props) => props.theme.colors.WhiteTertiary}; */
    height: 24px;
    width: 24px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    padding: 5px;
    font-size: 1rem;
    font-weight: 400;

    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;

    width: 250px;
    height: 40px;

    color: ${(props) => props.theme.colors.WhitePrimary};
    background: ${(props) => props.theme.colors.Primary};
    transition: 300ms;
  }

  button:hover {
    background: ${(props) => props.theme.colors.PrimaryLight};
    transition: 300ms;
  }
`;
