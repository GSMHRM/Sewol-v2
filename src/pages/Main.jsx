import React from 'react';
import Logo from "../img/sewolLogo.png";
import {Link} from "react-router-dom";
import "../styles/main.css";

function Main() {
    return (
        <div className='main'>
            <img src={Logo} alt="세월호 로고" />
            <Link to="/sewol">
                <button>
                    세월호 알아보러가기
                </button>
            </Link>
        </div>
    );
}

export default Main;