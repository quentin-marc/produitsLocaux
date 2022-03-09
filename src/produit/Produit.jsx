import './produit.css';

const Produit = ({ donnees }) => {

    /*      Méthodes      */
    
    /*       Executable       */
    var urlImage = '../../images/'+donnees.image;

    return(
        <div className="produit" >
            <div className='nomProduit'>{donnees.nom}</div>
        </div>
    );
};

export default Produit;
