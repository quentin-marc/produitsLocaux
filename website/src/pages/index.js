import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Phone from "../Components/Phone/Phone";
import Footer from "../Components/Footer/Footer";
import ReactPlayer from "react-player";
import mapImage from "../Assets/images/map.png";
import "../styles/App.css";
import "../styles/index.css";

class Homepage extends React.Component {
    scrollTo = () => {
        this.myRef.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    render = () => {
        return (
            <div className="homepage-container">
                <Navbar scrollTo={this.scrollTo} />
                <Phone scrollTo={this.scrollTo} />
                <div className="video-container" ref={(ref) => (this.myRef = ref)}>
                    <h2>Découvre l'impact environnemental des produits</h2>
                    <div className="video-frame-container">
                        <div className="video-wrapper">
                            <div className="video">
                                <ReactPlayer
                                    light={true}
                                    url="https://www.youtube.com/watch?v=2itdfVuO2eo"
                                />
                            </div>
                        </div>
                        <div className="text-video-wrapper">
                            <h3>Analyse ton impact carbone</h3>
                            <p>
                                Grâce au scanner de code barres intégré à l'application, tu peux
                                obtenir des informations sur des milliers de produits alimentaires
                                afin de connaitre leur impact sur l'environnement. Des informations
                                sur la traçabilité des produits sont également disponibles, afin de
                                visualiser l'origine de chaque ingrédient.
                            </p>
                            <h3>Pourquoi utiliser notre application ? </h3>
                            <p>
                                Notre approche est unique en son genre : nous souhaitons mettre à
                                disposition des consommateurs des informations propres à chaque
                                produit: Vous allez pouvoir connaître l'origine des ingrédients que
                                vous consommez, ainsi que le chemin qu'ils ont parcouru avant
                                d'arriver jusqu'à vous.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blockchain-container">
                    <h2>Traçabilité stockée sur la Blockchain</h2>
                    <div className="blockchain-wrapper">
                        <div className="blockchain-left">
                            <div className="blockchain-text-wrapper">
                                <h3>Pourquoi une blockchain ? </h3>
                                <p>
                                    La traçabilité de chaque produit est enregistré sur une
                                    blockchain : C'est un système de stockage d’informations
                                    transparent, sécurisé, et fonctionnant sans organe central de
                                    contrôle. Cette Blockchain permet de garantir la fiabilité de
                                    nos données.
                                </p>
                                <h3>Et l'environnement dans tout ça ? </h3>
                                <p>
                                    Nous avons conçu un outil permettant d'alerter les consommateurs
                                    sur l'impact environnemental des produits alimentaires. Nous
                                    avons la volonté d'utiliser une Blockchain basée sur du Proof of
                                    Stake, moins consommatrice en énergie que les Blockchain basée
                                    sur le Proof of Work.
                                </p>
                                <a className="button button-blue">En savoir plus</a>
                            </div>
                        </div>
                        <div className="blockchain-right">
                            <img src={mapImage} alt="world map" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default Homepage;
