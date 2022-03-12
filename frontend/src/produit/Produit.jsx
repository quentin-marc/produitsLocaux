import './produit.css';

const Produit = ({ donnees }) => {

    /*      Méthodes      */
    
    /*       Executable       */
    var style = {
        background: 'center / cover no-repeat url("http://localhost:3000/images/'+donnees.image+'")'
    };

    return(
        <div className="produit" >
            <img className='coche' src='./images/coche.svg'></img>
            <div className='imageProduit' style={style}></div>
            <div className='nomProduit'>{donnees.nom}</div>
            <div className='prix'>
                <span>{donnees.prix}</span> € / <span>{donnees.unite}</span>
            </div>
            <input className='quantiteProduit' type='number' min='0' defaultValue='0'></input>
        </div>
    );
};

export default Produit;
