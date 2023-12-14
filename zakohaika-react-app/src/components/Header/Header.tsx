import React from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

export const Header = () => {
    const location = useLocation();

    return (
        <header className="">
            <div className="logo">
                <a href="/#/">Закохайка</a>
                <span>Закохайся по повній</span>
            </div>
            <div id="cssmenu" className="align-center">
                <ul>
                    <li className={classNames({
                        active: location.pathname === '/'
                    })}
                    ><a href="/#/"><span>Головна</span></a></li>
                    <li className={classNames({
                        active: location.pathname === '/places'
                    })}
                    ><a href="/#/places"><span>Місця</span></a></li>

                    <li className={classNames({
                        active: location.pathname === '/about-us'
                    })}
                    ><a href="/#/about-us"><span>Про нас</span></a></li>
                    <li className={classNames('last', {
                        active: location.pathname === '/contacts'
                    })}
                    ><a href="/#/contacts"><span>Контакти</span></a></li>
                </ul>
            </div>
        </header>
    );
};
