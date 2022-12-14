import React from "react"
import "./App.css";
import {Navigate, useNavigate} from "react-router-dom"
import Navbar_AR from "./components/index_AR";
export default function Home_AR () {
  const navigate = useNavigate();
  const images = ["images/PFSC1.jpeg", "images/bg.png"];
  const delay = 2500;
  
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);
  
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
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"70%",height:"50px",cursor:"pointer"}} onClick={()=>Navigate("/Accueil_AR")}></img>
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
<div style={{backgroundImage: 
 "url('images/bg_ar.png')",
        height:'150%',
        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
       <div className="slideshow">
     <center>  <hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>


      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)`,marginLeft:"10%" }}
      >
        {images.map((images, index) => (
          <div
            className="slide"
            key={index}>
            <img alt="img1" src={images} style={{width:"90%",height:"460px"}} ></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      
    </div>
    <div >
    <center><hr style={{border: "3px solid #4682B4",width:"80%"}}></hr></center>

        <br></br>
       
        </div>
         </div>
    
    </div>
	</div>

  )
}