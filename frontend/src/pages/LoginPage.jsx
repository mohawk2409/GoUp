
import "primereact/resources/themes/lara-light-cyan/theme.css"
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Gradient from '../components/GradientText.jsx';
import { Link } from "react-router-dom";

function LoginPage() {

    return(
        <>
        <div
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(90deg, #FF5B17 0%, #FFC000 100%)",
    boxSizing:'border-box', 
    zIndex: -1  
  }}
>
    <form style={{margin: '20px'}}>
    <div style={{
        textAlign: "center",
        margin: "5px",
        padding: "12px",
        border: "1px solid white",
        borderRadius: "16px",
        background:'white'
      }}>
        <h2 style={{color:"transparent",backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", backgroundClip: "text",paddingBottom: ".2rem"}}>Connexion</h2>
        <div style={{textAlign:'left', margin:'10px'}}>
        <p>Identifiant</p>
        <InputText/>
        <p>Mot de passe</p>
        <InputText type="password"/>
        </div>
        <Link to="/PagePrincipale">
        <Button style={{margin: '10px', background: "linear-gradient(90deg, #FF5B17, #FFC000)", border: "none"}}>Envoyer </Button>
        </Link>
        <br/>
        <Link to="/CreateProfile">
        <a>Créer un compte</a>
        </Link>
        <Link to="/CreateProfile">
        <Gradient text="test" style={Gradient}/>
        </Link>
        <div>
        </div>
    </div>
    </form>
    </div>
    </>
    )
}




export default LoginPage
