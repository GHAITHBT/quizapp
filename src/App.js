import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./Quiz";
import InfoPage from "./Infopage";
import { Chart } from "./Charts";
import Pass from "./pass";
import PageValeurs from "./valeurs";
import PagePiliers from "./PiliersPage";
import Resultat from "./Resultat";
import Home_AR from "./Home_AR";
import About_AR from "./Quiz_AR";
import InfoPage_AR from "./Infopage_AR";
import Pass_AR from "./pass_AR";
import PageValeurs_AR from "./valeurs_AR";
import PagePiliers_AR from "./PiliersPage_AR";
function App() {
	
return ( 
	<>
	<valeurs/>
	<BrowserRouter>
	<Routes>
		<Route exact path="/" element={<Home/>}/>
		<Route exact path="/Quiz" element={<About/>}/>
		<Route exact path="/Info" element={<InfoPage/>}/>
		<Route exact path="/Rapport" element={<Chart/>}/>
		<Route exact path="/Password" element={<Pass/>}/>
		<Route exact path="/Nos_Valeurs" element={<PageValeurs />}/>
		<Route exact path="/Piliers" element={<PagePiliers />}/>
		<Route exact path="/Resultat" element={<Resultat />}/>
		<Route exact path="/Accueil_AR" element={<Home_AR/>}/>
		<Route exact path="/Quiz_AR" element={<About_AR/>}/>
		<Route exact path="/Info_AR" element={<InfoPage_AR/>}/>
		<Route exact path="/Password_AR" element={<Pass_AR/>}/>
		<Route exact path="/Nos_Valeurs_AR" element={<PageValeurs_AR />}/>
		<Route exact path="/Piliers_AR" element={<PagePiliers_AR />}/>



	</Routes>
	</BrowserRouter>
	</>
);
}

export default App;
