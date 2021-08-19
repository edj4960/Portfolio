import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';

import './Intro.scss'
import { NAV_BAR_HEIGHT } from '../Constants';
import { Fade } from 'react-reveal';
import { ReactComponent as HexFilled } from '../assets/HexFilled.svg';
import Title from '../components/intro/Title';

import Hex from '../components/Hex';
import HexBtn from '../components/HexBtn';

import HexBtnAn from '../components/HexBtnAn';
import Cascade from '../components/Cascade';
import HexBackground from '../assets/HexBackground.svg';

const Intro = () => {

	return (
		<div className="intro-pg">
			<Cascade top fade showIndex={0}>
				<div
					className="intro-pg-inner"
					style={{
						height: '100%',
						background: `url(${HexBackground})`,
						backgroundPosition: '130% 20%',
						backgroundRepeat: 'no-repeat'

					}}
				>
					<div className="title-div">
						<div className="title-inner">
							<Hex x="0px" y="-150px" />
							<Hex className="hex-right" />

							<Title />
							<div className="sub-title" />

							<Cascade top fade showIndex={0}>
								<h1>Evan Jones</h1>
							</Cascade>
							<Cascade bottom fade showIndex={0}>
								<h2>Full-Stack React and NodeJS Developer</h2>
							</Cascade>

						</div>
						<Cascade bottom fade showIndex={2}>
							<HexBtn center>
								Let's Build Something
							</HexBtn>
						</Cascade>
					</div>
				</div>
			</Cascade>
		</div>
	)
}

export default Intro;