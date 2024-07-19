import './index.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import CustomLink from "./components/CustomLink";

export default function NavBar() {

    const { t, i18n} = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  const swapLanguage = () => {
      if (i18n.language === 'en') {
        changeLanguage('fr');
      } else {
        changeLanguage('en');
      }
    };
  return (
    <>
    <Navbar expand="md" bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand to="#home">VehicleQuest</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='placement'>
            <Nav.Link><CustomLink to="/Home">{t('link1')}</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/about">{t('link2')}</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/Products">{t('link3')}</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/Book">{t('link4')}</CustomLink></Nav.Link>
            <Nav.Link><CustomLink to="/FAQ">{t('link5')}</CustomLink></Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link><Person2Icon></Person2Icon></Nav.Link>
            <Nav.Link><ShoppingCartIcon></ShoppingCartIcon></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        <Button className="mr-10" onClick={() => swapLanguage()}>{t('lang')}</Button>
      </Navbar>
      </>
  )
}

//export {NavElement};

