import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import Navbar_AR from "./components/index_AR";
export default function PageValeurs_AR () {
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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>navigate("/Accueil_AR")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar_AR/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>ثقافة سلامة الغذاء: التقييم الذاتي
</h3><h3 style={{color:"white"}}>ثقافة سلامة الغذاء</h3></center></div>
<div >
       <div >
       <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

        <center><h1>قيمنا</h1></center>
     <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>



<div style={{width:"100%"}}>
    <table style={{width:"100%"}}>
        <tr>
             <td style={{width:"50%",}}><h2 style={{color:"#D32F2F",marginLeft:"550px"}}>الكرم </h2><h3 style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}>نحن كرماء من القلب ، و يتعلق الأمر بالنسبة لنا  بتقديم المزيد للآخرين. 
 
</h3></td>
             <td style={{width:"50%"}}><img alt="img1" src="images/genero.jpg" style={{width:"50%",height:"100%",marginLeft:'40%',borderRadius:'20px'}} ></img>
</td>
        </tr>
    </table>

</div>   
<center> <hr style={{border: "3px solid #EF6C00",width:"80%"}}></hr></center>

<div>
    <table style={{width:"100%",backgroundColor:"#EDEDED"}}>
        <tr>
        <td style={{width:"50%"}}><img alt="img1" src="images/mutua.jpg" style={{width:"50%",height:"100%",borderRadius:'20px'}} ></img>
</td>
             <td style={{width:"50%"}}><h2 style={{color:'#303F9F',marginLeft:"400px"}}>تبادل العواطف </h2><h3 style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}>نحن دائما نصغي ونقدر رأي الآخرين. نعتقد أنه لا يمكننا المضي قدمًا بدون تعاون و تشارك
 </h3></td>
             
        </tr>
    </table>
</div>
<center> <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

<div>
    <table style={{width:"100%"}}>
        <tr>
            <td style={{width:"50%"}}><h2 style={{color:'#455A64',marginLeft:"550px"}}>الثقة 
</h2><h3 style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}>الجودة هي أساس لكل ما نقوم به. نحن نطمح دائمًا إلى تحسين المعايير ونعطي المثال 
 

</h3></td>
             <td style={{width:"50%"}}><img alt="img1" src="images/confi.jpg" style={{width:"50%",height:"100%",marginLeft:'40%',borderRadius:'20px'}} ></img>
</td>
        </tr>
    </table>
</div>   
<center> <hr style={{border: "3px solid #EF6C00",width:"80%", borderRadius: "5px"}}></hr></center>

<div>
    <table style={{width:"100%",backgroundColor:"#EDEDED"}}>
        <tr>
        <td style={{width:"50%"}}><img alt="img1" src="images/rig.jpg" style={{width:"50%",height:"100%",borderRadius:'20px'}} ></img>
</td>
             <td style={{width:"50%"}}><h2 style={{color:'#689F38',marginLeft:"400px"}}>الانضباط </h2><h3 style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}>نتمسك بالتزاماتنا ، ونظهر الانضباط والمثابرة
</h3></td>
           
        </tr>
    </table>
</div> 
<center> <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

<div>
    <table style={{width:"100%",}}>
        <tr>
             <td style={{width:"50%"}}><h2 style={{color:'#FBC02D',marginLeft:"550px"}}>الإبتكار</h2><h3 style={{textAlignLast:'right',marginLeft:"auto",textAlign:"right"}}>نحن نبحث باستمرار عن طرق لتحسين ما هو موجود بالفعل. لدينا حس المبادرة والإبداع

</h3></td>
             <td style={{width:"50%"}}><img alt="img1" src="images/innova.png" style={{width:"50%",height:"100%",borderRadius:'20px',marginLeft:'40%'}} ></img>
</td>
        </tr>
    </table>
</div>       
<center> <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

        </div>
  
    </div>

	</div>

  )
}