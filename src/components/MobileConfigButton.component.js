import React from 'react';
import { faGear } from '@fortawesome/free-solid-svg-icons';

export default function MobileConfigButton() {
	return (
		<button className='mobile-config-button'>
			<FontAwesomeIcon
				className='header__part1__faIcons__icon'
				icon={faGear}
			/>
			Test Settings
		</button>
	);
}
