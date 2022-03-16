import './App.css';
import FormulaireCreneaux from './formulaireCreneaux/formulaireCreneaux.jsx';
import FormulaireProduits from './formulaireProduits/formulaireProduits.jsx';
import ConfirmationCommande from './confirmationCommande/confirmationCommande.jsx';
import Footer from './footer/footer.jsx';
import React, { useState } from 'react';

function App() {
  const [listeCourse, setListeCourse] = useState({});
  return (
    <div className="App">
      <div id="mainContener">
        <FormulaireProduits listeCourse={listeCourse} setListeCourse={setListeCourse}></FormulaireProduits>
        <FormulaireCreneaux listeCourse={listeCourse}></FormulaireCreneaux>
        <ConfirmationCommande></ConfirmationCommande>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
