import './App.css';
import Produit from './produit/Produit.jsx';

//listing en dur des produits disponibles
var listeProduits = [
  {
    nom: 'Pommes',
    image: 'pommes.svg',
    prix: 2.3,
    unite: "kg",
    type: "fruit"
  },
  {
    nom: 'Beurre',
    image: 'beurre.svg',
    prix: 2.3,
    unite: "unite",
    type: "cremerie"
  },
  {
    nom: 'Blettes',
    image: 'blettes.svg',
    prix: 2.3,
    unite: "kg",
    type: "legumes"
  },
  {
    nom: 'Carottes',
    image: 'carottes.svg',
    prix: 2.3,
    unite: "kg",
    type: "legumes"
  },
  {
    nom: 'Celeri',
    image: 'celeri.svg',
    prix: 2.3,
    unite: "kg",
    type: "legumes"
  },
  {
    nom: 'Chou',
    image: 'chou.svg',
    prix: 2.3,
    unite: "unite",
    type: "legumes"
  },
  {
    nom: 'Choux de Bruxelle',
    image: 'choux_bruxelle.svg',
    prix: 2.3,
    unite: "kg",
    type: "legumes"
  }
];

function App() {
  return (
    <div className="App">
      <header className="header">
        Header
      </header>
      <div id="mainContener">
        {listeProduits.map((produit, i) => {       
          return (<Produit donnees={produit} key={i} />) 
        })}
      </div>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
