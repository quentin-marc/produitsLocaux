import './footer.css';

const Footer = () => {

    return(
        <footer id='footer'>
            <div className='subtitle'>Notre équipe</div>
            <div className='createurs'>
            <div className='createur'>
                <img className='photoCreateur' src='./images/corentin.png' alt='Corentin Branchereau'></img>
                <div className='nomCreateur'>Corentin<br></br>Branchereau</div>
            </div>  
            <div className='createur'>
                <img className='photoCreateur' src='./images/qandria.png' alt='Quentin De Andria'></img>
                <div className='nomCreateur'>Quentin<br></br>De Andria</div>
            </div> 
            <div className='createur'>
                <img className='photoCreateur' src='./images/qmarc.png' alt='Quentin MARC'></img>
                <div className='nomCreateur'>Quentin<br></br>Marc</div>
            </div> 
            <div className='createur'>
                <img className='photoCreateur' src='./images/louis.png' alt='Louis Rob'></img>
                <div className='nomCreateur'>Louis<br></br>Rob</div>
            </div> 
            </div>
        </footer>
    );
};

export default Footer;