import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../assets/logo.png');

export default function Header() {
	return (
		<div>
			<Link to='/'>
				<img src={logo} alt='website logo' />
			</Link>
			<div>hello world</div>
		</div>
	);
}
