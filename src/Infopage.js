import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import Navbar from "./components";
export default function InfoPage () {
    const navigate = useNavigate();
    const current = new Date();

    function BT() {
        var x = document.getElementById("BT");
        if (x.style.display === "none") {
          x.style.display = "block";
        } 
      }
    
  return (
	<div>
    <div style={{height:"15px",backgroundColor:"#177985"}}></div>
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
        <center ><h4 style={{color:"white"}}>sélectionnez votre fonction dans l'entreprise</h4></center>
  <div class="card-body">
    <table style={{width:"100%",}}> 
      <tr>
      <td >
       <input type="radio" value="Male" name="gender" onChange={(e) =>BT( localStorage.setItem('Poste',"Directeur"))}/> Directeur
<br></br></td><td>
        <input type="radio" value="Female" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Responsable"))}/> Responsable<br></br></td>
        </tr>
        <tr>
          <td>
        <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef service"))}/> Chef service<br></br>
        </td>
        <td>
        <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef d'atelier"))}/> Chef d'atelier<br></br>
        </td>
        </tr>
        <tr>
        <td>
         <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef d'équipe"))}/> Chef d'équipe<br></br></td><td>
         <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Conducteur"))}/> Conducteur<br></br></td>
         </tr>
         <tr>
         <td>
         <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Conductrice"))}/> Conductrice<br></br></td>
         <td>
         <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Opérateur"))}/> Opérateur<br></br></td></tr>
         <tr>
         <td>
          <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Magasinier"))}/> Magasinier<br></br></td><td> <input type="radio" value="Other" name="gender" onChange={(e) =>BT(localStorage.setItem('Poste',"Technicien maintenance"))}/> Technicien maintenance</td></tr>
          </table>

  </div>
  <div class="card-footer">
       <center>  <div id="BT" style={{display: 'none' }}>
        <Button variant="success"   onClick={()=>navigate("/Quiz")+localStorage.setItem("hours", current.getTime())+localStorage.setItem("minutes", current.getMinutes())}>Commencer</Button></div></center>
        </div>
</div>

	</div>
  </div>

  )
}