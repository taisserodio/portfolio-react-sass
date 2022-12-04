import SocialNetworks from './SocialNetworks';

import Avatar from '../imgs/foto.jpg'

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';


const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Tais Seródio" />
        <p>imagem</p>
        <p className="title">Desenvolvedora</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">
            Download currículo
        </a>
    </aside>
};

export default Sidebar