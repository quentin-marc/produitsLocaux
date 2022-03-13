import './creneauxRecuperation.css';

import React, { useState } from 'react';

const CreneauxRecuperation = ({ }) => {

    var listeCreneaux = [
        {
            nomJour: "lundi",
            dateJour: "14 / 03",
            creaneauxDuJour: ["8h00", "9h00", "10h00", "11h00", "12h00"]
        },{
            nomJour: "mardi",
            dateJour: "15 / 03",
            creaneauxDuJour: ["8h00", "9h00", "10h00", "11h00", "12h00"]
        },{
            nomJour: "mercredi",
            dateJour: "16 / 03",
            creaneauxDuJour: ["8h00", "9h00", "10h00", "11h00", "12h00"]
        },{
            nomJour: "jeudi",
            dateJour: "17 / 03",
            creaneauxDuJour: ["8h00", "9h00", "10h00", "11h00", "12h00"]
        },{
            nomJour: "vendredi",
            dateJour: "18 / 03",
            creaneauxDuJour: ["8h00", "9h00", "10h00", "11h00", "12h00"]
        },{
            nomJour: "samedi",
            dateJour: "19 / 03",
            creaneauxDuJour: ["8h00", "9h00", "10h00", "11h00", "12h00"]
        }
    ];

    const [creneauSelectionne, setCreneauSelectionne] = useState({jour: -1, creneau: -1});

    return(
        <div id='boxCreneauxRecuperation'>
            <h1>Quand souhaitez-vous récupérer vos courses ?</h1>
            <div>Adresse de récupération: TODO mettre adresse</div>
            <div id='creneauxRecuperation'>
                {listeCreneaux.map((jour, index) => {
                    return <div className='jour' key={index}>
                                <div className='nomJour'>{jour.nomJour}</div>
                                <div className='dateJour'>{jour.dateJour}</div>
                                {jour.creaneauxDuJour.map((creneau, indexCreneau) => {
                                    return <div className='creneau' key={indexCreneau} onClick={e => setCreneauSelectionne({jour:index, creneau:indexCreneau})}>
                                            { (creneauSelectionne.jour == index && creneauSelectionne.creneau == indexCreneau) ? <img className='cocheCreneau' src='./images/coche.svg' alt="Produit selectionné"></img> : null }
                                            {creneau}
                                        </div>
                                })}
                            </div>
                })}
            </div>
            <h1>Comment pouvons-nous vous contacter ?</h1>
            <div>Ces informations ne seront utilisées que pour la gestion de cette commande. Elles ne seront pas utilisées à des fins publicitaires.</div>
            <input type='text' placeholder='benoit.dupont@gmail.com'></input>
            <input type='text' placeholder='06 34 52 12 13'></input>
            <button>Valider ma commande</button>
        </div>
    );
};

export default CreneauxRecuperation;