import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faGooglePlus,
    faInstagram, faLinkedin,
    faPinterest,
    faTwitter,
    faVimeo, faYoutube
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    library.add(
        faFacebook,
        faInstagram,
        faTwitter,
        faGooglePlus,
        faPinterest,
        faVimeo,
        faLinkedin,
        faYoutube,
    );

    return(
        <footer>
            <div className="zerogrid bottom-footer">
                <div className="row">
                    <div className="bottom-social">
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'google-plus']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'pinterest']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'vimeo']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    Copyright @ - Designed by Zakokhaychiki
                </div>
            </div>
        </footer>
    );
}
