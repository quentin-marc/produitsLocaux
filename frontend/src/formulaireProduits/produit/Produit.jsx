import './produit.css';

import React, { useState } from 'react';

const Produit = ({ donnees, listeCourse, setListeCourse }) => {
    
    /*       Executable       */
    var style = {
        background: 'center / cover no-repeat url("./images/'+donnees.image+'")'
    };

    const [nbProduits, setNbProduits] = useState(0);

    return(
        <div className="produit" >
            { nbProduits > 0 ? <img className='coche' src='./images/coche.svg' alt="Produit selectionné"></img> : null }
            <div className='imageProduit' style={style}></div>
            <div className='nomProduit'>{donnees.id}</div>
            <div className='prix'>
                <span>{donnees.price}</span> € / <span>{donnees.quantification}</span>
            </div>
            <input className='quantiteProduit' type='number' min='0' defaultValue='0' onChange={e => {
                setListeCourse({...listeCourse, [donnees._id] : e.target.value});
                setNbProduits(e.target.value)
                }} ></input>
        </div>
    );
};

export default Produit;
