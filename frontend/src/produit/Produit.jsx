import './produit.css';

import React, { useState } from 'react';

const Produit = ({ donnees }) => {
    
    /*       Executable       */
    var style = {
        background: 'center / cover no-repeat url("http://localhost:3000/images/'+donnees.image+'")'
    };

    const [nbProduits, setNbProduits] = useState(0);
    console.log(nbProduits);

    return(
        <div className="produit" >
            { nbProduits > 0 ? <img className='coche' src='./images/coche.svg' alt="Produit selectionné"></img> : null }
            <div className='imageProduit' style={style}></div>
            <div className='nomProduit'>{donnees.nom}</div>
            <div className='prix'>
                <span>{donnees.prix}</span> € / <span>{donnees.unite}</span>
            </div>
            <input className='quantiteProduit' type='number' min='0' defaultValue='0' onChange={e => setNbProduits(e.target.value)} ></input>
        </div>
    );
};

export default Produit;
