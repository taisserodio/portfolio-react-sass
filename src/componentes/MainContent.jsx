import AboutContainer from './AboutContainer';
import ProjetcsContainer from './ProjetcsContainer';
import TechnologiesContainer from './TechnologiesContainer';

import '../styles/components/maincontent.sass';


const MainContent = () => {
    return <main id="main-content">
        <AboutContainer/>
        <TechnologiesContainer/>
        <ProjetcsContainer/>
        </main>
}

export default MainContent