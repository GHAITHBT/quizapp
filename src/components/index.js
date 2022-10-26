import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			<h6>Acceuil |</h6>
		</NavLink>
		<NavLink to='/Nos_Valeurs' activeStyle>
			<h6>Nos Valeurs |</h6>
		</NavLink>
		<NavLink to='/Piliers' activeStyle>
        <h6>Les piliers de la Food Safety Culture 
      |</h6>
		</NavLink>
		<NavLink to='/Info' activeStyle>
        <h6>Auto Evaluation | </h6>
		</NavLink>
        <NavLink to='/Rapport' activeStyle>
        <h6>Rapport  </h6>
		</NavLink>
		
		
		</NavMenu>

	</Nav>
	</>
);
};

export default Navbar;
