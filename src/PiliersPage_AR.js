import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import Navbar_AR from "./components/index_AR";
export default function PagePiliers_AR () {
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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:'pointer'}} onClick={()=>navigate("/Accueil_AR")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar_AR/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>ثقافة سلامة الغذاء: التقييم الذاتي
</h3><h3 style={{color:"white"}}>ثقافة سلامة الغذاء</h3></center></div>
<div >
       <div >
       <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

        <center><h3>ركائز ثقافة سلامة الغذاء 
</h3></center>
     <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>
</div>
<table style={{width:'95%'}}><tr><td> <img alt="img1" src="images/piliers_ar.png" style={{width:"100%",height:"500px"}} ></img></td><td style={{width:"35%",marginLeft:"100px",textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}><h4>
   <span>(GFSI)</span>   هذا التقييم الذاتي مستوحى من دليل
   لشهر أبريل 2018 وإجراءاتنا الداخلية ، ويهدف إلى توجيه 
    الأفكار وخطة العمل المستقبلية التي سيتم وضعها لسلامة الأغذية في الصناعات الغذائية التونسية.</h4></td></tr></table>
  
    </div>

	</div>

  )
}