import React from "react";
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import { useState } from "react";

function CreateProfile(){

  const [nomUtilisateur, setNomUtilisateur] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nomUtilisateur, motDePasse, email })
    })
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Error: " + err));
  };
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
    backgroundImage: "linear-gradient(90deg, #FF5B17 0%, #FFC000 100%)", // 👈 fond dégradé
    boxSizing:'border-box',
    zIndex: -1  
  }}
>
    <form style={{margin: '20px'}} onSubmit={handleSubmit}>
    <div style={{
        textAlign: "center",
        margin: "5px",
        padding: "12px",
        border: "1px solid white",
        borderRadius: "16px",
        background:'white'
      }}>
        <h2 style={{color:"transparent",backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", backgroundClip: "text",paddingBottom: ".2rem"}}>Inscription</h2>
        <div style={{textAlign:'left', margin:'10px'}}>
        <p>Nom d'utilisateur</p>
        <InputText type="text" placeholder="Nom d'Utilisateur" value={nomUtilisateur} onChange={e => setNomUtilisateur(e.target.value)}/>
        <p>Adresse mail</p>
        <InputText type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <p>Mot de passe</p>
        <InputText type="password" placeholder="Mot de passe" value={motDePasse} onChange={e => setMotDePasse(e.target.value)}/>
        </div>
        <Button type="submit" style={{margin: '10px', background: "linear-gradient(90deg, #FF5B17, #FFC000)", border: "none"}}>Envoyer </Button>
        <br/>
        <Link to="/">
            <p style={{cursor:'pointer',color:"transparent",backgroundImage:"linear-gradient(90deg, #FF5B17, #FFC000)", backgroundClip: "text",paddingBottom: ".2rem"}} >Vous avez déjà un compte ? <br/> Connectez-vous</p>
            </Link>
        {/* <Gradient text="Avez vous un compte"></Gradient> */}
    </div>
    </form>
    {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
    </>
    )
}


export default CreateProfile