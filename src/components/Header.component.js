import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faKeyboard,
	faUser,
	faBell,
} from '@fortawesome/free-regular-svg-icons';
import {
	faCrown,
	faInfo,
	faGear,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const logo = require('../assets/logo.png');

export default function Header() {
	return (
		<header className='header'>
			<div className='header__part1'>
				<Link className='header__part1__link' to='/'>
					<img
						src={logo}
						className='header__part1__link__logo'
						alt='website logo'
					/>
					<h2 className='header__part1__link__name'>Lionkeytype</h2>
				</Link>
				<div className='header__part1__faIcons'>
					<FontAwesomeIcon
						className='header__part1__faIcons__icon'
						icon={faKeyboard}
					/>
					<FontAwesomeIcon
						className='header__part1__faIcons__icon'
						icon={faCrown}
					/>
					<FontAwesomeIcon
						className='header__part1__faIcons__icon'
						icon={faInfo}
					/>
					<FontAwesomeIcon
						className='header__part1__faIcons__icon'
						icon={faGear}
					/>
				</div>
			</div>
			<div className='header__part2'>
				<FontAwesomeIcon
					className='header__part2__faIcons__icon'
					icon={faUser}
				/>
				<FontAwesomeIcon
					className='header__part2__faIcons__icon'
					icon={faBell}
				/>
				<FontAwesomeIcon
					className='header__part2__faIcons__icon'
					icon={faRightFromBracket}
				/>
			</div>
		</header>
	);
}
