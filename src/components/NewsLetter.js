import { useState } from "react";
import { Container, Confirm } from "../styles/components/NewsLetter";

const NewsLetter = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    let name_user = document.getElementById("name");
    const email_user = document.getElementById("email");
    name_user.value = "";
    email_user.value = "";
    setOpen(!open);
    // Aqui fazemos a conexão com api para enviar os dados pro back end
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <Container>
      <div className="svg">
        <svg viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48.6 0H10.8C7.8219 0 5.4 2.35463 5.4 5.25001V18.375H10.8V10.5L28.08 23.1C28.5475 23.4404 29.1159 23.6244 29.7 23.6244C30.2841 23.6244 30.8525 23.4404 31.32 23.1L48.6 10.5V34.1251H27V39.3751H48.6C51.5781 39.3751 54 37.0204 54 34.1251V5.25001C54 2.35463 51.5781 0 48.6 0ZM29.7 17.7188L12.5982 5.25001H46.8018L29.7 17.7188Z"
            fill="#fff"
          />
          <path
            d="M0 21H18.9V26.25H0V21ZM5.4 28.875H21.6V34.125H5.4V28.875ZM13.5 36.75H24.3V42H13.5V36.75Z"
            fill="#fff"
          />
        </svg>
      </div>

      <span className="tittle">Receba nossas novidades, descontos e muito mais</span>

      <form onSubmit={handleConfirm} method="post">
        <section className="formSectionInput">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
            minLength={3}
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            placeholder="Digite seu email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </section>
        <section className="FormSubmit">
          <input type="submit" value="Eu quero receber novidades!" />
        </section>
      </form>

      <Confirm open={open}>
        <h1>Deseja confirmar a sua inscrição?</h1>
        <h2>você recebera todas as novidades em seu email</h2>

        <span>{name}, o email para quem enviaremos as novidades é</span>
        <span>{email}</span>

        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Confirmar inscrição
        </button>
        <button onClick={() => setOpen(!open)}>Voltar</button>
      </Confirm>
    </Container>
  );
};

export default NewsLetter;
