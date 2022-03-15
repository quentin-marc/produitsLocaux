import './formulaireCreneaux.css';
import axios from 'axios';

import React, { useState, useEffect } from 'react';

const FormulaireCreneaux = ({ }) => {
    const [creneauSelectionne, setCreneauSelectionne] = useState({jour: -1, creneau: -1});
    const [listeCreneaux, setListeCreneaux] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loadingValidationCommande, setValidationCommande] = useState(false);
    const [errorValidationCommande, setErrorValidationCommande] = useState(null);


    function retourChoixProduits(){
        document.getElementById('formulaireProduits').style.display = "block";
        document.getElementById('formulaireCreneaux').style.display = "none";
    }

    function validerCommande(e){
        setValidationCommande(true);
        const validerCommande = async () => {
            try {
                console.log(e)
                const response = await axios.post(
                    `http://127.0.0.1:3001/users`,
                    {userEmail: "aa", userPhoneNumber: e.phone_in_talk}
                );
                
                
                // const response = await axios.post(
                //     `http://127.0.0.1:3001/users/order`,
                //     "data"
                // );

                setErrorValidationCommande(null);
                document.getElementById('formulaireProduits').style.display = "none";
                document.getElementById('formulaireCreneaux').style.display = "none";
                // Messsage Commande bien prise en compte, merci
            } catch (err) {
                setError(err.message);
                setErrorValidationCommande(null);
            } finally {
                setLoading(false);
            }
        };
        validerCommande();
    }

    useEffect(() => {
        const getListeCreneaux = async () => {
          try {
                const response = await axios.get(
                    `http://127.0.0.1:3001/slots`
                );
                setListeCreneaux(response.data.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setListeCreneaux(null);
            } finally {
                setLoading(false);
            }
        };
        getListeCreneaux();
    }, []);

    return(
        <div id='formulaireCreneaux'>
            <h1>Quand souhaitez-vous récupérer vos courses ?</h1>
            <div className='subtitle'>Adresse de récupération: <a href='https://www.google.com/maps/place/24+Quai+Victor+Augagneur,+69003+Lyon/@45.7579468,4.8388607,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4ea5a3982a907:0xd76fa2c965fd54fb!8m2!3d45.7579431!4d4.8410494?hl=fr' target="_blank">24 Quai Victor Augagneur, 69 003 Lyon</a> (prenez la rue Chaponnay, toquez à la première porte à gauche juste après la pharmacie qui fait l'angle).</div>
            <div id='creneauxRecuperation'>
                {!listeCreneaux ? null : listeCreneaux.map((jour, index) => {
                    return <div className='jour' key={index}>
                                <div className='nomJour'>{jour.day}</div>
                                <div className='dateJour'>{jour.date}</div>
                                {jour.slots.map((creneau, indexCreneau) => {
                                    return <div className='creneau' key={indexCreneau} onClick={e => setCreneauSelectionne({jour:index, creneau:indexCreneau})}>
                                            { (creneauSelectionne.jour === index && creneauSelectionne.creneau === indexCreneau) ? <img className='cocheCreneau' src='./images/coche.svg' alt="Produit selectionné"></img> : null }
                                            {creneau}
                                        </div>
                                })}
                            </div>
                })}
            </div>
            <h1>Comment pouvons-nous vous contacter ?</h1>
            <div className='subtitle'>Ces informations seront seulement utilisées pour la gestion de cette commande. Elles ne seront pas utilisées à des fins publicitaires.</div>
            <div className='formBox'>
                <span className="material-icons-outlined iconForm">email</span>
                <input type='text' placeholder='benoit.dupont@gmail.com'></input>
                <span className="material-icons-outlined iconForm">phone_in_talk</span>
                <input type='text' placeholder='06 34 52 12 13'></input>
            </div>
            <div className='boxButtons'>
                <button onClick={retourChoixProduits}>Choisir d'autres produits</button>
                <button onClick={validerCommande}>Valider ma commande</button>
            </div>
        </div>
    );
};

export default FormulaireCreneaux;