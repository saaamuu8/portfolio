// STYLED
import { HeaderContainer, HeaderTitle, HeaderSubTitle, HeaderButtons } from './Header.styles';
// ROUTER
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderTitle>
                Samuel Vitales
            </HeaderTitle>
            <HeaderSubTitle>
                Full Stack Developer
            </HeaderSubTitle>
            <HeaderButtons>
                <Link to="/contact"> Contact </Link>
                <p> / </p>
                <Link to="/cv"> CV </Link>
            </HeaderButtons>
        </HeaderContainer>
    )
}

export default Header;