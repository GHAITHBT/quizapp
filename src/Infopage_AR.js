import React ,{useState}from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button,Modal, ModalFooter } from "react-bootstrap";
import Navbar_AR from "./components/index_AR";
export default function InfoPage_AR () {
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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>navigate("/Accueil_AR")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar_AR/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>ثقافة سلامة الغذاء: التقييم الذاتي
</h3><h3 style={{color:"white"}}>ثقافة سلامة الغذاء</h3></center></div>
    <div  style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'110vh',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
    <div class="card text-white bg-dark mb-3 info_box" style={{width:"60%",cursor:"pointer"}}>
        <center ><h4 style={{color:"white"}}>حدد دورك </h4></center>
  <div class="card-body">
    <table style={{width:"100%",textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}> 
      <tr>
      <td >
       مدير <input type="radio"  name="Fonction" style={{fontWeight:"bold",marginRight:"auto"}} onChange={(e) =>BT( localStorage.setItem('Poste',"Directeur"))}/><br></br></td><td>
       مسؤول  <input type="radio"  name="Fonction" style={{fontWeight:"bold",marginRight:"auto"}} onChange={(e) =>BT( localStorage.setItem('Poste',"Directeur"))}/><br></br></td>
        </tr>
        <tr>
          <td>
       رئيس الخدمة   <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef service"))}/> <br></br>
        </td>
        <td>
         رئيس ورشة العمل <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef d'atelier"))}/><br></br>
        </td>
        </tr>
        <tr>
        <td>
         قائد الفريق  <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Chef d'équipe"))}/><br></br></td><td>
         سائق  <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Conducteur"))}/><br></br></td>
         </tr>
         <tr>
         <td>
        القائد  <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Conductrice"))}/> <br></br></td>
         <td>
         عامل <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Opérateur"))}/> <br></br></td></tr>
         <tr>
         <td>
          امين المخزن <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Magasinier"))}/> <br></br></td>
          <td> فني صيانة <input type="radio"  name="Fonction" onChange={(e) =>BT(localStorage.setItem('Poste',"Technicien maintenance"))}/> </td></tr>
          </table>

  </div>
  <div class="card-footer">
       <center>  <div id="BT" style={{display: 'none' }}>
        <Button variant="success"   onClick={()=>handleViewShow()}>ابدأ</Button></div></center>
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
                        <span style={{fontSize:"20px",marginLeft:"50%",fontWeight:"bold",color:"#177985"}}>التقييم </span><button type="button" class="btn-close" aria-label="Close" onClick={()=>hanldeViewClose()}></button>

                    </Modal.Header>
                    <Modal.Body>
                    <br></br>
                     <table style={{textAlign:"right",marginLeft:'auto',marginBottom:"40px"}}><tr><td style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}> <span style={{fontWeight:"bold",padding:'5px',fontSize:"20px",textAlignLast:'right',marginLeft:"auto",textAlign:"right",marginRight:"auto"}}> . تم اقتراح 20 سؤالا -<br></br>. إجابة واحدة متوقعة فقط لكل سؤال، يوصى باختيار الإجابة الأقرب للوضع الحالي-</span> </td></tr></table>
                    </Modal.Body>
                    <ModalFooter>
                    <div>
                       <center>   <Button variant="success"   onClick={()=>navigate("/Quiz_AR")+localStorage.setItem("hours", current.getTime())+localStorage.setItem("minutes", current.getMinutes())}>ابدأ</Button></center>

                          
                        </div>
                    </ModalFooter>
                   
                </Modal>
            </div>
  </div>

  )
}