import React from "react";

class Footer extends React.Component {
    render = () => {
        return (
            <div className="footer-container">
                <a href="https://lowympact.fr?from=website">Découvrir l'app</a>
                <p>Lowympact © 2021</p>
                <a href="mailto:corentin.branchereau@insa-lyon.fr">Nous contacter</a>
            </div>
        );
    };
}

export default Footer;
