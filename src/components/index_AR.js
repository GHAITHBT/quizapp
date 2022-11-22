import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar_AR = () => {
return (
	<>
	<Nav>
		

		<NavMenu>
        <NavLink to='/password_AR' activeStyle>
        <h6>التقرير  </h6>
		</NavLink>
<NavLink to='/Info_AR' activeStyle>
        <h6>التقييم الذاتي  </h6>
		</NavLink>
        <NavLink to='/Piliers_AR' activeStyle>
        <h6>ركائز ثقافة سلامة الغذاء 
      </h6>
		</NavLink>
        <NavLink to='/Nos_Valeurs_AR' activeStyle>
			<h6>قيمنا </h6>
		</NavLink>
		<NavLink to='/Accueil_AR' >
			<h6 style={{color:"blue"}}>الإستقبال <span style={{color:"black"}}>|</span></h6>
		</NavLink>
        <NavLink to='/' >
			<h6 style={{marginLeft:"50px",color:'black'}}>Français</h6>
		</NavLink>
		
		
		
        
		
		
		</NavMenu>

	</Nav>
	</>
);
};

export default Navbar_AR;
