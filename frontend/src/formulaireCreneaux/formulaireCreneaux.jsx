import './formulaireCreneaux.css';
import axios from '../axios-instance';

import React, { useEffect, useReducer, useState } from 'react';
import Produit from '../formulaireProduits/produit/Produit';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

const FormulaireCreneaux = ({ listeCourse }) => {
    const [creneauSelectionne, setCreneauSelectionne] = useState({jour: -1, creneau: -1});

    const [listeCreneaux, setListeCreneaux] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const [errorValidationCommande, setErrorValidationCommande] = useState(null);


    function retourChoixProduits(){
        document.getElementById('formulaireProduits').style.display = "block";
        document.getElementById('formulaireCreneaux').style.display = "none";
    }

    const validerCommande = event => {
        event.preventDefault();
        setSubmitting(true);
        var creneau = listeCreneaux[creneauSelectionne.jour];
        var date = [creneau.day,creneau.date,creneau.slots[creneauSelectionne.creneau]].join(" - ");
        var products = Object.entries(listeCourse).map((k,v) => {return {product: k[0], occurences: k[1]}})

        const validerCommande = async () => {
            try {
                var dataUser = {
                    userEmail: formData.mail,
                    userPhoneNumber: formData.phone
                }
                var response = await axios.post(`users`, dataUser);

                var dataOrder = {
                    userId: response.data.data._id,
                    pickupDate: date,
                    products: products
                }
                response = await axios.post(`users/order`, dataOrder);
                
                setErrorValidationCommande(null);
                document.getElementById('formulaireProduits').style.display = "none";
                document.getElementById('formulaireCreneaux').style.display = "none";
                // Messsage Commande bien prise en compte, merci
                document.getElementById('confirmationCommande').style.display = "block";
            } catch (err) {
                setError(err.message);
                setErrorValidationCommande(null);
            } finally {
                setSubmitting(false);
            }
        };

        validerCommande();
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    useEffect(() => {
        const getListeCreneaux = async () => {
        try {
                const response = await axios.get(`slots`);
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
            <h1>Quand souhaitez-vous r??cup??rer vos courses ?</h1>
            <div className='subtitle'>Adresse de r??cup??ration: <a href='https://www.google.com/maps/place/24+Quai+Victor+Augagneur,+69003+Lyon/@45.7579468,4.8388607,17z/data=!3m1!4b1!4m5!3m4!1s0x47f4ea5a3982a907:0xd76fa2c965fd54fb!8m2!3d45.7579431!4d4.8410494?hl=fr' target="_blank">24 Quai Victor Augagneur, 69 003 Lyon</a> (prenez la rue Chaponnay, toquez ?? la premi??re porte ?? gauche juste apr??s la pharmacie qui fait l'angle).</div>
            <div id='creneauxRecuperation'>
                {!listeCreneaux ? null : listeCreneaux.map((jour, index) => {
                    return <div className='jour' key={index}>
                                <div className='nomJour'>{jour.day}</div>
                                <div className='dateJour'>{jour.date}</div>
                                {jour.slots.map((creneau, indexCreneau) => {
                                    return <div className='creneau' key={indexCreneau} onClick={e => setCreneauSelectionne({jour:index, creneau:indexCreneau})}>
                                            { (creneauSelectionne.jour === index && creneauSelectionne.creneau === indexCreneau) ? <img className='cocheCreneau' src='./images/coche.svg' alt="Produit selectionn??"></img> : null }
                                            {creneau}
                                        </div>
                                })}
                            </div>
                })}
            </div>
            <h1>Comment pouvons-nous vous contacter ?</h1>
            <div className='subtitle'>Ces informations seront utilis??es pour la gestion de cette commande. Elles ne seront pas utilis??es ?? des fins publicitaires. Vous pouvez nous joindre au 06 51 33 16 99.</div>
            <div className='formBox'>
                <span className="material-icons-outlined iconForm">email</span>
                <input name="mail" type='text' placeholder='benoit.dupont@gmail.com' onChange={handleChange}></input>
                <span className="material-icons-outlined iconForm">phone_in_talk</span>
                <input name="phone" type='text' placeholder='06 34 52 12 13' onChange={handleChange}></input>
            </div>
            <div className='boxButtons'>
                <button onClick={retourChoixProduits}>Choisir d'autres produits</button>
                <button onClick={validerCommande}>Valider ma commande</button>
            </div>
        </div>
    );
};

export default FormulaireCreneaux;