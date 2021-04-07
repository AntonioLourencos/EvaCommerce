import { Container, Information, Map, Contact } from "../styles/components/Footer";
import StorefrontIcon from "@material-ui/icons/Storefront";
import MapIcon from "@material-ui/icons/Map";
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
  return (
    <Container>
      <h1 className="tittle">Eva</h1>
      <section className="container-options">
        <Information>
          <StorefrontIcon className="ico" />
          <span>Quem somos</span>
          <span>Politicas de privacidade</span>
          <span>FeedBack de clientes</span>
          <span>Trocas ou devoluções</span>
        </Information>
        <Map>
          <MapIcon className="ico" />
          <span>Rua Av. Rio Negro,</span>
          <span>1100 Jardim Roselandia</span>
          <span>14406-005</span>
          <span>Franca / SP</span>
        </Map>
        <Contact>
          <StorefrontIcon className="ico" />
          <div>
            <WhatsAppIcon />
            <span>(16) 9 98179-7325</span>
          </div>
          <div>
              <MailIcon />
              <span>contato@evacommerce.com.br</span>
          </div>
        </Contact>
      </section>
    </Container>
  );
};
export default Footer;
