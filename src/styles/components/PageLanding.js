import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: 98px;
    color: purple;
  }
`;

export const Banner = styled.div`
  position: relative;
  height: 450px;
  width: 100%;

  padding: 10px;

  .slide {
    position: absolute;
    display: none;
    top: 0px;
    left: 0px;
  }

  .slide-visible {
    display: block;
  }

  .slide-image {
    height: 450px;
    width: 100%;
    object-fit: cover;
    filter: brightness(60%) !important;
  }

  .slide-container-text {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0px;
    left: 0px;

    height: 100%;
    padding: 10px;

    color: ${(props) => props.theme.colors.WhitePrimary};
    font-weight: 400;

    & :nth-child(1) {
      font-size: 3.9rem;
    }
    & :nth-child(2) {
      font-size: 2.9rem;
    }
  }

  .select-slide {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    bottom: 0px;
    width: 100%;

    .select-item {
      height: 12px;
      width: 12px;
      border-radius: 6px;
      margin: 10px 5px;
      background: ${(props) => props.theme.colors.WhitePrimary};
      transition: 300ms;

      cursor: pointer;
    }

    .select-item:hover {
      transform: scale(1.1);
      transition: 300ms;
    }

    .selected-item {
      background: ${(props) => props.theme.colors.Primary};
      transform: scale(1.2);
      transition: 300ms;
    }
  }

  @media (max-width: 768px) {
    .slide-container-text {
      & :nth-child(1) {
        font-size: 2.9rem;
      }
      & :nth-child(2) {
        font-size: 1.9rem;
      }
    }
  }

  @media (max-width: 450px) {
    .slide-container-text {
      & :nth-child(1) {
        font-size: 1.85rem;
      }
      & :nth-child(2) {
        font-size: 1.3rem;
      }
    }
  }
`;

export const Information = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.Primary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  transition: 200ms;
  cursor: default;

  & :hover {
    color: ${(props) => props.theme.colors.PrimaryLight};
    transition: 200ms;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 15px 5px 5px;
    & :nth-child(1) {
      height: 36px;
      width: 36px;
    }
  }

  .Space {
    height: 48px;
    width: 2px;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.WhiteTertiary};
  }

  @media (max-width: 450px) {
    flex-direction: column;
    flex-wrap: unset;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin: 30px 15px 5px 5px;
      & :nth-child(1) {
        height: 30px;
        width: 30px;
      }
    }
    .Space {
      display: none;
    }
  }
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;

    span {
      position: absolute;
      bottom: 7px;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.WhitePrimary};
      font-weight: 700;
    }

    img {
      height: 230px;
      width: 236px;
      object-fit: cover;
      filter: brightness(60%) !important;
    }
  }
`;
