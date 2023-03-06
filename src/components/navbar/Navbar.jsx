import { useState } from "react";
// STYLES
import { NavbarContainer, NavbarUl, NavbarLogo, NavbarHamburguer } from "./Navbar.styles";
// ROUTER
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <NavbarContainer>
            <NavbarLogo>
                <Link to="/">
                    Samuel V.
                </Link>
            </NavbarLogo>
            <NavbarHamburguer onClick={handleOpen}>
                <div></div>
                <div></div>
                <div></div>
            </NavbarHamburguer>
            <NavbarUl open={open}>
                <Link onClick={handleOpen} to="/"> Home </Link>
                <Link onClick={handleOpen} to="/about"> About </Link>
                <Link onClick={handleOpen} to="/projects"> Projects </Link>
                <Link onClick={handleOpen} to="/contact"> Contact </Link>
            </NavbarUl>
        </NavbarContainer>
    )
}

export default Navbar;