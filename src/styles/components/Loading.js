import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 100%;

  span {
    font-size: 1.6rem;
    padding: 15px;
  }

  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: ${props => props.theme.colors.Primary};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
