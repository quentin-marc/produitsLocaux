import './formulaireProduits.css';
import Produit from './produit/Produit.jsx';

import React, { useState } from 'react';

const FormulaireProduits = ({ }) => {

    /*      Méthodes     */
    function etapeSuivante(){
        document.getElementById('formulaireProduits').style.display = "none";
        document.getElementById('formulaireCreneaux').style.display = "block";
    }

    //listing en dur des produits disponibles
    var listeProduits = [
        {
            nom: 'Pommes',
            image: 'pommes.svg',
            prix: 2.3,
            unite: "kg",
            type: "fruit"
        },{
            nom: 'Beurre doux (250g)',
            image: 'beurre.svg',
            prix: 2.3,
            unite: "unite",
            type: "cremerie"
        },{
            nom: 'Blettes',
            image: 'blettes.svg',
            prix: 2.3,
            unite: "kg",
            type: "legumes"
        },{
            nom: 'Carottes',
            image: 'carottes.svg',
            prix: 2.3,
            unite: "kg",
            type: "legumes"
        },{
            nom: 'Celeri',
            image: 'celeri.svg',
            prix: 2.3,
            unite: "kg",
            type: "legumes"
        },{
            nom: 'Chou',
            image: 'chou.svg',
            prix: 2.3,
            unite: "unite",
            type: "legumes"
        },{
            nom: 'Choux de Bruxelle',
            image: 'choux_bruxelle.svg',
            prix: 2.3,
            unite: "kg",
            type: "legumes"
        }
    ];

    return(
        <div id='formulaireProduits'>
            <div id="nosProduits">
            {listeProduits.map((produit, i) => {       
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