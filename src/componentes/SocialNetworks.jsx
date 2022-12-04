import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/tais-serodio-5b384517b/"},
    { name: "github", icon: <FaGithub /> , link: "https://github.com/taisserodio" },
    { name: "instagram", icon: <FaInstagram /> , link: "https://www.instagram.com/taisserodio/"}
];

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} target={network.link} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    );
}
export default SocialNetworks;