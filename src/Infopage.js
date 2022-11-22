import React,{useState} from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button,Modal, ModalFooter } from "react-bootstrap";
import Navbar from "./components";
export default function InfoPage () {
    const navigate = useNavigate();
    const current = new Date();
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    function BT() {
        var x = document.getElementById("BT");
        if (x.style.display === "none") {
          x.style.display = "block";
        } 
      }
    
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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>navigate("/")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
    <div  style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'110vh',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
   <div style={{fontSize:"22px",color:"white",fontWeight:"bold"}}><center><span style={{backgroundColor:""}}> <br></br></span></center></div>
   <div style={{fontSize:"22px",color:""}}><center><span style={{backgroundColor:"white"}}> </span></center></div>
    <div class="card text-white bg-dark mb-3 info_box" style={{width:"60%",cursor:"pointer"}}>
        <center ><h4 style={{color:"white"}}>sélectionnez votre fonction </h4></center>
  <div class="card-body">
    <table style={{width:"100%",}}> 
      <tr>
      <td >
       <input type="radio"  name="Fonction" style={{fontWeight:"bold"}} onChange={(e) =>BT( localStorage.setItem('Poste',"Directeur"))}/> Directeur
<br></br></td><td>
        <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Responsable"))}/> Responsable<br></br></td>
        </tr>
        <tr>
          <td>
        <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef service"))}/> Chef service<br></br>
        </td>
        <td>
        <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef d'atelier"))}/> Chef d'atelier<br></br>
        </td>
        </tr>
        <tr>
        <td>
         <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef d'équipe"))}/> Chef d'équipe<br></br></td><td>
         <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Conducteur"))}/> Conducteur<br></br></td>
         </tr>
         <tr>
         <td>
         <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Conductrice"))}/> Conductrice<br></br></td>
         <td>
         <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Opérateur"))}/> Opérateur<br></br></td></tr>
         <tr>
         <td>
          <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Magasinier"))}/> Magasinier<br></br></td><td> <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Technicien maintenance"))}/> Technicien maintenance</td></tr>
          </table>

  </div>
  <div class="card-footer">
       <center>  <div id="BT" style={{display: 'none' }}>
        <Button variant="success"   onClick={()=>handleViewShow()}>Commencer</Button></div></center>
        </div>
</div>

	</div>
  <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                    size={"lg"}
                >
                    <Modal.Header >
                        <span style={{fontSize:"20px",marginLeft:"30%",fontWeight:"bold",color:"#177985"}}>Questionnaire d'évaluation </span><button type="button" class="btn-close" aria-label="Close" onClick={()=>hanldeViewClose()}></button>

                    </Modal.Header>
                    <Modal.Body>
                     <span style={{marginLeft:"0px",fontWeight:"bold",padding:'5px',fontSize:"20px"}}>- 20 questions sont proposées.<br></br>- Une seule réponse est attendue à chaque question, il est recommandé de choisir la réponse qui est la plus proche de la situation actuelle. </span><br></br>
                        
                    </Modal.Body>
                    <ModalFooter>
                    <div>
                       <center>  <Button variant="success"   onClick={()=>navigate("/Quiz")+localStorage.setItem("hours", current.getTime())+localStorage.setItem("minutes", current.getMinutes())}>Commencer</Button></center>

                          
                        </div>
                    </ModalFooter>
                   
                </Modal>
            </div>
  </div>

  )
}