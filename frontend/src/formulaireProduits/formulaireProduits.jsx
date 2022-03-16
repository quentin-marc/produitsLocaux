import './formulaireProduits.css';
import axios from "axios"
import Produit from './produit/Produit.jsx';

import React, { useState, useEffect } from 'react';

const FormulaireProduits = ({listeCourse, setListeCourse}) => {
    // const [listeProduits, setListeProduits] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    /*      Méthodes     */
    function etapeSuivante(){
        document.getElementById('formulaireProduits').style.display = "none";
        document.getElementById('formulaireCreneaux').style.display = "block";
    }

    //listing en dur des produits disponibles
    var listeProduits = [
        {
            id: 'Pommes',
            image: 'pommes.svg',
            price: 2.3,
            quantification: "kg",
            type: "fruit"
        },{
            id: 'Beurre doux (250g)',
            image: 'beurre.svg',
            price: 2.3,
            quantification: "unite",
            type: "cremerie"
        },{
            id: 'Blettes',
            image: 'blettes.svg',
            price: 2.3,
            quantification: "kg",
            type: "legumes"
        },{
            id: 'Carottes',
            image: 'carottes.svg',
            price: 2.3,
            quantification: "kg",
            type: "legumes"
        },{
            id: 'Celeri',
            image: 'celeri.svg',
            price: 2.3,
            quantification: "kg",
            type: "legumes"
        },{
            id: 'Chou',
            image: 'chou.svg',
            price: 2.3,
            quantification: "unite",
            type: "legumes"
        },{
            id: 'Choux de Bruxelle',
            image: 'choux_bruxelle.svg',
            price: 2.3,
            quantification: "kg",
            type: "legumes"
        }
    ];
    
    // useEffect(() => {
    //     const getListeProduits = async () => {
    //     try {
    //             const response = await axios.get(
    //                 `http://127.0.0.1:3001/products`
    //             );
    //             setListeProduits(response.data.data);
    //             setError(null);
    //         } catch (err) {
    //             setError(err.message);
    //             setListeProduits(null);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     getListeProduits();
    // }, []);

    return(
        <div id='formulaireProduits'>
            <h1>Commandez vos produits locaux depuis chez vous</h1>
            <div className='subtitle'>Bienvenue, nous sommes <a href='#footer'>une petite équipe d’ingénieurs</a> voulant aider à (re)développer les circuits courts. Ce "drive de produits locaux" vient juste de naître, le projet va s'améliorer progressivement.</div>
            <div id="nosProduits">
                {!listeProduits ? null : listeProduits.map((produit, i) => {       
                    return (<Produit donnees={produit} key={i} listeCourse={listeCourse} setListeCourse={setListeCourse}/>) 
                })}
            </div>
            <div className='boxButtons'>
                <button onClick={etapeSuivante}>Choisir un créneau</button>
            </div>
        </div>
    );
};

export default FormulaireProduits;