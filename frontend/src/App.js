import './App.css';
import FormulaireCreneaux from './formulaireCreneaux/formulaireCreneaux.jsx';
import FormulaireProduits from './formulaireProduits/formulaireProduits.jsx';

function App() {
  return (
    <div className="App">
      <header className="header">
        Header
      </header>
      <div id="mainContener">
        <FormulaireProduits></FormulaireProduits>
        <FormulaireCreneaux></FormulaireCreneaux>
      </div>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

export default App;
