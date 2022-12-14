import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import Navbar from "./components";

export default function PageValeurs () {
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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>navigate("/")}></img>
</td><td style={{float:"right",marginTop:"20px"}}>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
<div >
       <div >
       <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

        <center><h1>Nos Valeurs</h1></center><br></br>
        <center><h3>Partager une vision et des valeurs, voilà ce qui nous fera exister demain .</h3></center>
     <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>



<div style={{width:"100%"}}>
    <table style={{width:"100%"}}>
        <tr>
             <td style={{width:"50%"}}><h1 style={{color:"#D32F2F",fontWeight:'bold'}}>LA GENEROSITÉ </h1><h3>Nous sommes généreux de cœur, et pour nous, il s'agit de donner plus aux autres. 
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
             <td style={{width:"50%"}}><h1 style={{color:'#303F9F',fontWeight:'bold'}}>LA MUTUALITE : </h1><h3>Nous écoutons et valorisons toujours l'opinion des autres. Nous pensons que nous ne pouvons pas avancer sans collaboration. </h3></td>
             
        </tr>
    </table>
</div>
<center> <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

<div>
    <table style={{width:"100%"}}>
        <tr>
            <td style={{width:"50%"}}><h1 style={{color:'#455A64',fontWeight:"bold"}}>LA CONFIANCE 
</h1><h3>La qualité est la base de tout ce que nous faisons. Nous aspirons à toujours améliorer les standards et à donner l'exemple. 

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
             <td style={{width:"50%"}}><h1 style={{color:'#689F38',fontWeight:"bold"}}>LA RIGUEUR </h1><h3>Nous tenons à nos engagements, nous faisons preuve de discipline et de persévérance. 
</h3></td>
           
        </tr>
    </table>
</div> 
<center> <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

<div>
    <table style={{width:"100%",}}>
        <tr>
             <td style={{width:"50%"}}><h1 style={{color:'#FBC02D',fontWeight:'bold'}}>L’INNOVATION</h1><h3>Nous sommes à la recherche constante de l’amélioration de l’existant. Nous avons le sens de l’initiative et de la créativité. 

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