import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain-icon.png';
import './Logo.css';

const Logo = () => {
	return (
		<Tilt className="Tilt br2 shadow-2 ma3" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
 			<div className="Tilt-inner pa3">
 				<img src={brain} alt='brain icon'/>
 			</div>
		</Tilt>
	)
}

export default Logo;