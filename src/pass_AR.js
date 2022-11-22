import React,{useState,useEffect} from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import { Button } from "react-bootstrap";
import Navbar_AR from "./components/index_AR";
export default function Pass_AR () {
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
    <div style={{minWidth:"1300px"}}>   <div style={{height:"15px",backgroundColor:"#177985"}}></div>
    <div style={{backgroundImage: 
"url('images/cheese6.png')",
height:'70px',
maxHeight:'80px',
 marginTop:'0px',
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat'}}> 
<table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}}onClick={()=>navigate("/Accueil_AR")} ></img>
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
        <center ><h4 style={{color:"white"}}>كلمة السر</h4></center>
  <div class="card-header"><center> يمكن للمستخدمين المصرح لهم فقط الدخول للبيانات</center></div>
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