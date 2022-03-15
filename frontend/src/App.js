import './App.css';
import FormulaireCreneaux from './formulaireCreneaux/formulaireCreneaux.jsx';
import FormulaireProduits from './formulaireProduits/formulaireProduits.jsx';

function App() {
  return (
    <div className="App">
      <div id="mainContener">
        <FormulaireProduits></FormulaireProduits>
        <FormulaireCreneaux></FormulaireCreneaux>
      </div>
      <footer>
        <div className='subtitle'>Notre équipe</div>
        <div className='createurs'>
          <div className='createur'>
            <img className='photoCreateur' src='./images/corentin.png'></img>
            <div className='nomCreateur'>Corentin<br></br>Branchereau</div>
          </div>  
          <div className='createur'>
            <img className='photoCreateur' src='./images/qandria.png'></img>
            <div className='nomCreateur'>Quentin<br></br>De Andria</div>
          </div> 
          <div className='createur'>
            <img className='photoCreateur' src='./images/qmarc.png'></img>
            <div className='nomCreateur'>Quentin<br></br>Marc</div>
          </div> 
          <div className='createur'>
            <img className='photoCreateur' src='./images/louis.png'></img>
            <div className='nomCreateur'>Louis<br></br>Rob</div>
          </div> 
        </div>
      </footer>
    </div>
  );
}

export default App;
