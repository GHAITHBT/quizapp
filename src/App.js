import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./Quiz";
import InfoPage from "./Infopage";
import { Chart } from "./Charts";
import Pass from "./pass";
import PageValeurs from "./valeurs";
import PagePiliers from "./PiliersPage";
function App() {
	
return ( 
	<>
	<valeurs/>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/about" element={<About/>}/>
		<Route exact path="/Info" element={<InfoPage/>}/>
		<Route exact path="/Rapport" element={<Chart/>}/>
		<Route exact path="/Password" element={<Pass/>}/>
		<Route exact path="/Nos_Valeurs" element={<PageValeurs />}/>
		<Route exact path="/Piliers" element={<PagePiliers />}/>



	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
