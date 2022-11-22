import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import Navbar from "./components";
export default function PagePiliers () {
  const navigate = useNavigate();

  return (
	<div style={{minWidth:"1300px"}}>
    <div style={{height:"15px",backgroundColor:"#177985"}}></div>
           <div style={{backgroundImage: 
 "url('images/cheese6.png')",
 height:'70px',
 maxHeight:'80px',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:'pointer'}} onClick={()=>navigate("/")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
<div >
       <div >
       <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

        <center><h3>Les piliers de la Food Safety Culture 
</h3></center>
     <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>
</div>
<table style={{width:'95%'}}><tr><td style={{width:"35%"}}><h4>Cette auto-évaluation est inspirée du Guide du GFSI Avril 2018 et notre procédure interne, a pour objectif d’orienter les réflexions et le futur plan d’action à mettre en place pour la Food Safety au sein de Industries Alimentaires de Tunisie.</h4></td><td> <img alt="img1" src="images/piliers.png" style={{width:"100%",height:"500px"}} ></img></td></tr></table>
  
    </div>

	</div>

  )
}