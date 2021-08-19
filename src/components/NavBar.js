import React, { useState, useEffect } from 'react';
import { Link, Element, Events, } from 'react-scroll';
import { Fade } from 'react-reveal';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import HexBtnAn from './HexBtnAn';
import Cascade from './Cascade';

import { ABOUT_ME_NAME, MY_WORK_NAME, EXPERIENCE_NAME, CONTACT_NAME } from '../Constants';
import {
	NAV_BAR_HEIGHT,
	STICKY_NAV_BAR_HEIGHT,
	NAV_BAR_ITEMS_ANIMATION_DELAY
} from '../Constants';

import './NavBar.scss'

const NavItem = props => {
	const { title, link, width, index } = { ...props }

	return (
		<Cascade showIndex={index} style={{ minWidth: 225, textAlign: 'center' }} fade top>
			<Link
				className='nav-item'
				activeClass="active"
				to={link}
				spy={true}
				smooth={true}
				offset={-NAV_BAR_HEIGHT}
				{...props}
			>
				<HexBtnAn title={title} width={width} />
			</Link>
		</Cascade>
	)
}

const NavBar = () => {
	const [sticky, setSticky] = useState(false);
	const [navbarOffset, setNavbarOffset] = useState(0);
	const [showNavBar, setShowNavBar] = useState(false);
	const [prevScroll, setPrevScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [navbarOffset, prevScroll]);

	useEffect(() => {
		const navbar = document.getElementById("navbar");
		setNavbarOffset(navbar.offsetTop);
		setPrevScroll(window.scrollY);
	}, []);

	const handleScroll = () => {
		// const navbar = document.getElementById("navbar");
		// const scrollY = window.scrollY;

		// if (navbar.offsetTop < window.scrollY + 20) {
		// 	setSticky(true);
		// } else if (navbar.offsetTop > window.scrollY + 80) {
		// 	setSticky(false);
		// }

		// console.log(scrollY, prevScroll);
		// if (scrollY < prevScroll) {
		// 	setShowNavBar(true);
		// } else if (scrollY > prevScroll) {
		// 	setShowNavBar(false);
		// }

		// setPrevScroll(scrollY);
	}

	return (
		<div id="navbar" className={sticky ? 'sticky' : ''}>
			<div className={`navbar-inner ${!showNavBar ? 'hide' : ''}`}>
				<NavItem title="About Me" width={160} link={ABOUT_ME_NAME} index={4} />
				<NavItem title="My Work" width={150} link={MY_WORK_NAME} index={5} />
				<NavItem title="Experience" width={185} link={EXPERIENCE_NAME} index={6} />
				<NavItem title="Contact" width={145} link={CONTACT_NAME} index={7} />
			</div>
		</div>
	)
}

export default NavBar;