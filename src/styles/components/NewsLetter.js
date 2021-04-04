import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  background: ${(props) => props.theme.colors.BlackTertiary};

  .svg {
    padding: 20px;
    height: 114px;
    width: 114px;
  }

  .tittle {
    font-size: 2.6rem;
    color: ${(props) => props.theme.colors.WhitePrimary};
  }

  form {
    padding: 20px;
  }

  .formSectionInput {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formSectionInput input {
    margin: 10px;
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 4px;

    outline: none;
    border: none;
  }

  .FormSubmit {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .FormSubmit input {
    margin: 10px;
    padding: 10px 15px;
    font-size: 1.2rem;
    border-radius: 4px;

    outline: none;
    border: none;
    cursor: pointer;
    transition: 300ms;

    background: ${(props) => props.theme.colors.Primary};
    color: ${(props) => props.theme.colors.WhitePrimary};
  }

  .FormSubmit input:hover {
    transform: scale(1.1);
    transition: 300ms;
  }

  @media (max-width: 768px) {
    .tittle {
      font-size: 2.2rem;
    }
    .formSectionInput input {
    }
  }

  @media (max-width: 450px) {
    .tittle {
      font-size: 1.8rem;
    }
    .formSectionInput input {
      width: 160px;
      font-size: 1.2rem;
    }
  }
`;

export const Confirm = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  
  z-index: 2;

  background: ${(props) => props.theme.colors.BlackSecundary};
  color: ${(props) => props.theme.colors.WhitePrimary};

  span {
    padding: 20px;
    font-size: 1.2rem;
  }

  button {
    margin: 10px;
    padding: 10px 15px;
    font-size: 1.2rem;
    border-radius: 4px;

    outline: none;
    border: none;
    cursor: pointer;
    transition: 300ms;

    background: ${(props) => props.theme.colors.Primary};
    color: ${(props) => props.theme.colors.WhitePrimary};
  }

  @media(max-width:450px){
    h1{
      font-size: 1.5rem;
    }
    h2{
      font-size: 1.3rem;
    }
    span {
    padding: 20px;
    font-size: 1.2rem;
  }
  }
`;
