import { Container } from "../styles/components/Loading";

const Loading = () => {
  return (
    <Container>
      <div className="spinner"/>
      <span>Carregando</span>
    </Container>
  );
};

export default Loading;
