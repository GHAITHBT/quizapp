import React from "react"
import "./App.css";
import {useNavigate} from "react-router-dom"
import Navbar from "./components";
export default function Home () {
  const navigate = useNavigate();
  const images = ["images/PFSC1.jpeg", "images/chef6.gif"];
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
	<div >
    <div style={{height:"15px",backgroundColor:"#177985"}}></div>
           <div style={{backgroundImage: 
 "url('images/cheese6.png')",
 height:'11vh',

        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
      <table style={{width:"95%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/logo1.png" style={{width:"50%",height:"50px"}} ></img>
</td><td>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h2  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h2><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
<div style={{backgroundImage: 
 "url('images/cheese2.jpg')",
        height:'100%',
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
            <img alt="img1" src={images} style={{width:"90%",height:"300px"}} ></img>
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

  )
}