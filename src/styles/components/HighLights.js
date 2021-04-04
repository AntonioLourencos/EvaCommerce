import styled from "styled-components";

export const Container = styled.section`
  padding: 15px;
  .bar {
    height: 4px;
    width: 40px;
    background: ${(props) => props.theme.colors.Primary};
  }

  h1{
      font-size: 1.6rem;
      margin: 5px 0px;
  }
`;
