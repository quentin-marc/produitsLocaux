import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

class Team extends React.Component {
    render = () => {
        return (
            <div className="team-container">
                <Navbar scrollTo={this.scrollTo} />
                <h2>Notre équipe</h2>
                <div className="members-container">
                    <div className="member">
                        <img src="team/Corentin.png" alt="Corentin" />
                        <h3>
                            BRANCHEREAU
                            <br /> Corentin
                        </h3>
                    </div>
                    <div className="member">
                        <img src="team/Quentin.png" alt="Quentin" />
                        <h3>
                            DE ANDRIA
                            <br /> Quentin
                        </h3>
                    </div>
                    <div className="member">
                        <img src="team/Thibaut.png" alt="Thibaut" />
                        <h3>
                            GRAVEY
                            <br /> Thibaut
                        </h3>
                    </div>
                    <div className="member bigger">
                        <img src="team/Thomas.png" alt="Thomas" />
                        <h3>
                            MIGNOT
                            <br /> Thomas
                        </h3>
                    </div>
                    <div className="member bigger">
                        <img src="team/Killian.png" alt="Killian" />
                        <h3>
                            OECHSLIN
                            <br /> Killian
                        </h3>
                    </div>
                    <div className="member">
                        <img src="team/Louis.png" alt="Louis" />
                        <h3>
                            ROB
                            <br /> Louis
                        </h3>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default Team;
