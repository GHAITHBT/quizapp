import React,{useState,useEffect} from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import Navbar from "./components";
export default function Pass () {
    const navigate = useNavigate();
    const [password,setPassword]=useState()
    function BT() {
       
      }
      useEffect(() => {
        var x = document.getElementById("BT");
       
        if(password=="12345678"){
            if (x.style.display === "none") {
              x.style.display = "block";
            } }
      }, [password]);
  return (
    <div>   <div style={{height:"15px",backgroundColor:"#177985"}}></div>
    <div style={{backgroundImage: 
"url('images/cheese6.png')",
height:'11vh',

 marginTop:'0px',
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat'}}> 
<table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"50%",height:"50px"}} ></img>
</td><td>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
    <div  style={{backgroundImage: 
        "url('images/cheese2.jpg')",
               height:'110vh',
               marginTop:'0px',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'}}>
   
   <div class="card text-white bg-dark mb-3 info_box" style={{width:"60%",cursor:"pointer"}}>
        <center ><h4 style={{color:"white"}}>Mot de Passe</h4></center>
  <div class="card-header"><center> Seuls les utilisateurs autorisés peuvent consulter les données</center></div>
  <div class="card-body">
  <input type="password" style={{ width: "100%",
  padding: "10px 10px",
  margin: "8px 0",
  boxSizing: "border-box"}}onChange={(e) => setPassword(e.target.value)}/>
  </div>
  <div class="card-footer"><div id="BT" style={{display: 'none' }}>
       <center> <Button variant="success"   onClick={()=>navigate("/Rapport")}>Continuer</Button></center>
        </div></div>
</div>
</div>
 
	</div>

  )
}