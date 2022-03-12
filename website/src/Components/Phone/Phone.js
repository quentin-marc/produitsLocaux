import React from "react";
import homeImage from "../../Assets/images/home.jpg";
import historyImage from "../../Assets/images/history.jpg";
import Fade from "../Fade/Fade";

class Phone extends React.Component {
    state = {
        phoneToRender: 2,
    };

    componentDidMount = () => {
        this.switchImage();
    };

    switchImage = () => {
        let nb = this.state.phoneToRender;
        nb = nb + 1;
        if (nb >= 2) nb = 0;
        this.setState({ phoneToRender: nb });
        // if (nb % 2 !== 0) setTimeout(this.switchImage, 400);
        // else
        setTimeout(this.switchImage, 7000);
    };

    displayPhone = () => {
        return (
            <React.Fragment>
                <Fade show={this.state.phoneToRender === 0}>
                    <img src={homeImage} key={0} alt="home" />
                </Fade>

                <Fade show={this.state.phoneToRender === 1}>
                    <img src={historyImage} key={1} alt="history" />
                </Fade>
            </React.Fragment>
        );
    };

    render = () => {
        return (
            <div className="home-intro-container">
                <div className="home-text-container">
                    <h1>
                        La traçabilité des produits <br /> <bold>du champ à ton assiette</bold>
                    </h1>
                    <button className="button-blue" onClick={this.props.scrollTo}>
                        En savoir plus
                    </button>
                    <ul>
                        <li>Des milliers de produits</li>
                        <li>Mesure ton impact carbone</li>
                        <li>Découvre le trajet des aliments</li>
                    </ul>
                </div>
                <div className="home-phone-container">
                    <div className="home-phone">{this.displayPhone()}</div>
                </div>
            </div>
        );
    };
}

export default Phone;
