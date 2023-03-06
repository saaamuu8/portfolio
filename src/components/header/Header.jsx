// STYLED
import { HeaderContainer, HeaderText, HeaderTitle, HeaderSubTitle, HeaderButtons } from './Header.styles';
// ROUTER
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <HeaderContainer>
            <HeaderText>
                <HeaderTitle>
                    Samuel Vitales
                </HeaderTitle>
                <HeaderSubTitle>
                    Web Developer
                </HeaderSubTitle>
            </HeaderText>
            <HeaderButtons>
                <Link to="/contact"> Contact </Link>
                <p> / </p>
                <Link to="/cv"> CV </Link>
            </HeaderButtons>
        </HeaderContainer>
    )
}

export default Header;