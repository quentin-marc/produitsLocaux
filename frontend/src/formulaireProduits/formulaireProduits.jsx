import './formulaireProduits.css';
import axios from "axios"
import Produit from './produit/Produit.jsx';

import React, { useState, useEffect } from 'react';

const FormulaireProduits = ({ }) => {
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
                    `http://127.0.0.1:3001/products`
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
            <div id="nosProduits">
                {!listeProduits ? null : listeProduits.map((produit, i) => {       
                    return (<Produit donnees={produit} key={i} />) 
                })}
            </div>
            <div className='boxButtons'>
                <button onClick={etapeSuivante}>Choisir un créneau</button>
            </div>
        </div>
    );
};

export default FormulaireProduits;