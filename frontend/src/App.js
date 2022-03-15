import './App.css';
import FormulaireCreneaux from './formulaireCreneaux/formulaireCreneaux.jsx';
import FormulaireProduits from './formulaireProduits/formulaireProduits.jsx';
import Footer from './footer/footer.jsx';

function App() {
  return (
    <div className="App">
      <div id="mainContener">
        <FormulaireProduits></FormulaireProduits>
        <FormulaireCreneaux></FormulaireCreneaux>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
