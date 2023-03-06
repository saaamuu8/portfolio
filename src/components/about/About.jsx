// STYLED
import { AboutContainer, AboutLeft, AboutRight } from "./About.styles";
// IMAGES
import AboutImage from '../../assets/about.svg';
// ROUTER
import { Link } from "react-router-dom";

const About = () => {
    return(
        <AboutContainer>
            <AboutLeft>
                <h1> Full Stack Developer </h1>
                <h2> Samuel Vitales Ponce </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam exercitationem magni sit? Possimus, deleniti. Dicta sunt nulla quas dignissimos delectus natus obcaecati odit reprehenderit accusantium explicabo dolorum temporibus deleniti facere dolor ratione, debitis aperiam error laudantium deserunt excepturi molestias. Suscipit rerum quaerat commodi dolores dolorum, laboriosam ut nobis sunt unde ipsa mollitia earum corporis veritatis ducimus assumenda. Consequatur repudiandae laudantium reprehenderit a tenetur. Distinctio minus ducimus quam ea fuga cumque eveniet aut, eligendi sit laudantium quaerat id optio libero?
                </p>
                <Link to="/contact">
                    Contact Me
                </Link>
            </AboutLeft>
            <AboutRight>
                <img src={AboutImage} alt="Logo from Samuel" />
            </AboutRight>
        </AboutContainer>
    )
}

export default About;