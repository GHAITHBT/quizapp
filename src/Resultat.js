import React, { useState,useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";
import GaugeChart from 'react-gauge-chart'
import Navbar from "./components";
import Timer from "./Timer";
import { useNavigate } from "react-router-dom";



function Resultat() {
  const navigate = useNavigate();

  var now  = " 15:00:00";
var then = " 14:20:00";

var ms = moment(now," HH:mm:ss").diff(moment(then," HH:mm:ss"));
var d = moment.duration(ms);
var s = d.minutes();
const [isActive, setIsActive] = useState(false);
const [isPaused, setIsPaused] = useState(true);
const [time, setTime] = useState(0);

  const current = new Date();
  const [timeStart, settimeStart] = useState("");
  const [timeFinish, settimeFinish] = useState("");
  const [timer, settimer] = useState(0);
   const [repo, setRepo] = useState("");
   const [QST, setQST] = useState([]);
const handledata = () => {
    const url = `http://localhost:5001/add_data`
    const Credentials = { Poste,QST,score,time}
    axios.post(url, Credentials)
        .then(response => {
            const result = response.data;
            const { status, message, data } = result;
           
        })
        .catch(err => {
            console.log(err)
        })
      }
      const handletimer = () => {
        settimeStart(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
        var ms = moment(timeFinish,"HH:mm:ss").diff(moment(timeStart,"HH:mm:ss"));
        var d = moment.duration(ms);
        var s = d.minutes();
        settimer(s)
        console.log(timer)

          }
      
  // Properties
  const [showResults, setShowResults] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [Poste, setPoste] = useState("");
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  useEffect(() => {
    console.log('test tijngsdfsd',s)
    handleStart()

    console.log("start time",timeStart);
    console.log("finishc time",timeFinish);
    console.log("timer",timer)
    settimeFinish(`${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`)
    console.log(repo)
    console.log(Poste)
    console.log(QST)
    
    setPoste(localStorage.getItem("Poste"))
    let interval = null;

	if (isActive && isPaused === false) {
	interval = setInterval(() => {
		setTime((time) => time + 10);
	}, 10);
	} else {
	clearInterval(interval);
	}
	return () => {
	clearInterval(interval);
	};
  }, [timeStart,timeFinish,repo,Poste,QST,timer,isActive,isPaused]);

  

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    
  };
  

  return (
    <div>
      <GaugeChart id="gauge-chart2" 
                           colors={['#FF5F6D', '#FFC371','#25CF00']}
                           
  nrOfLevels={20} 
  percent={  score / 20} 
  needleColor="grey"
  textColor="blue"
/>     
        <div style={{height:"15px",backgroundColor:"#177985"}}></div>
    <div style={{backgroundImage: 
 "url('images/cheese6.png')",
 height:'11vh',

        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"50%",height:"50px"}} ></img>
</td><td >        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
    <div  style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'110%',
        position:"block",
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
     <div style={{backgroundImage: 
          "url('images/cheese6.jpg')",
                 height:'100vh',
                 marginTop:'0px',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 width:"100%"}}>
                  <table   style={{width:"100 %",marginLeft:'20%'}}> <center><tr><td><h1 style={{color:"white",backgroundColor:"#177985"}}>Resultats Finale</h1>
          <h2 style={{color:"white",backgroundColor:"#177985"}}>
            {score} Réponses corrects sur 20 - (
            {(score / 20) * 100}%)
          </h2></td><td>  <td style={{width:"200px",height:'200px'}} rowSpan={5}> <GaugeChart id="gauge-chart2" 
                           colors={['#FF5F6D', '#FFC371','#25CF00']}
                           
  nrOfLevels={20} 
  percent={  score / 20} 
  needleColor="grey"
  textColor="blue"
/>               </td></td></tr></center></table>

<div class="card text-white bg-dark mb-3">
        <center> <span style={{color:"white",fontSize:"40px",fontWeight:"bold"}}>Merci pour votre participation</span></center>
        </div>
        <center><span style={{cursor:"pointer",color:"#177985",backgroundColor:"white",fontSize:"25px",fontWeight:"bold"}} onClick={()=>navigate("/")}>Retour à la page d'accueil</span></center>
        </div>

      </div>
    </div>
    
  );
  
}

export default Resultat;
