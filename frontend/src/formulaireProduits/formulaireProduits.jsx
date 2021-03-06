import './formulaireProduits.css';
import axios from "../axios-instance"
import Produit from './produit/Produit.jsx';

import React, { useState, useEffect } from 'react';

const FormulaireProduits = ({listeCourse, setListeCourse}) => {
    const [listeProduits, setListeProduits] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /*      Méthodes     */
    function etapeSuivante(){
        document.getElementById('formulaireProduits').style.display = "none";
        document.getElementById('formulaireCreneaux').style.display = "block";
    }
    
    useEffect(() => {
        const getListeProduits = async () => {
        try {
                const response = await axios.get(
                    `products`
                );
                setListeProduits(response.data.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setListeProduits(null);
            } finally {
                setLoading(false);
            }
        };
        getListeProduits();
    }, []);
    return(
        <div id='formulaireProduits'>
            <h1>Commandez vos produits locaux depuis chez vous</h1>
            <div className='subtitle'>Bienvenue, nous sommes <a href='#footer'>une petite équipe d’ingénieurs</a> voulant aider à (re)développer les circuits courts. Ce "drive de produits locaux" vient juste de naître, le projet va s'améliorer progressivement.</div>
            <div id="nosProduits">
                {!listeProduits ? null : listeProduits.map((produit, i) => {       
                    return (<Produit donnees={produit} key={i} listeCourse={listeCourse} setListeCourse={setListeCourse}/>) 
                })}
            </div>
            {!listeProduits ? null : (<h1>Total commande: {Math.round((listeProduits.map(e => listeCourse[e._id]*e.price || 0)).reduce((a,b) => a+b, 0)*100)/100}€</h1>) }
            <div className='boxButtons'>
                <button onClick={etapeSuivante}>Choisir un créneau</button>
            </div>
        </div>
    );
};

export default FormulaireProduits;