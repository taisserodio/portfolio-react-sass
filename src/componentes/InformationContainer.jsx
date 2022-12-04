import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
    return (
        <section id="information" >
            <div className="info-card">
                <AiFillPhone id="phone-icon" />
                <div>
                    <h3>Telefone</h3>
                    <h5>(18)99767-8352</h5>
                </div >
            </div >
            <div className="info-card">
                <AiOutlineMail id="email-icon" />
                <div>
                    <h3>E-mail</h3>
                    <h5>taisserodio12@gmail.com</h5>
                </div >
            </div >
            <div className="info-card">
                <AiFillEnvironment id="pin-icon" />
                <div>
                    <h3>Localização</h3>
                    <h5>Assis / SP</h5>
                </div >
            </div >
        </section >
    );
}

export default InformationContainer