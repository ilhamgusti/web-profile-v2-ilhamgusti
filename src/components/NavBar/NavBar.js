import React, { useState } from 'react'
import stylees from './NavBar.module.css'
const NavBar = () => {
	const [switchNav, setSwitchNav] = useState(false)

	return (
		<div className={switchNav ? stylees.NavBar__open : stylees.NavBar}>
			<section className={stylees.Nav__Icon} onClick={() => setSwitchNav(!switchNav)}>
				<span className={stylees.TopBar} />
				<span className={stylees.MiddleBar} />
				<span className={stylees.BottomBar} />
			</section>
			<ul className={stylees.NavBar__ul}>
				<li>
					<a href="#home">HOME</a>
				</li>{' '}
				<li>
					<a href="#about">ABOUT</a>
				</li>{' '}
				<li>
					<a href="#contact">CONTACT</a>
				</li>{' '}
				<li>
					<a href="#project">PROJECT</a>
				</li>
				<br />
				<br />
				<li className="resume">
					<a href="#resume">RESUME</a>
				</li>{' '}
				<li></li>
				{/* <li><Button /></li> */}
			</ul>
		</div>
	)
}
export default NavBar
