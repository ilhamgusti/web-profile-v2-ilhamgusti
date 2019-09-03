// import React from 'react';
import styled from 'styled-components'
import React from 'react'

const Section2 = styled.div`
	height: calc(120vh);
	z-index: -10;
	background: linear-gradient(
			316deg,
			rgba(234, 234, 234, 0.02) 0%,
			rgba(234, 234, 234, 0.02) 16.667%,
			rgba(128, 128, 128, 0.02) 16.667%,
			rgba(128, 128, 128, 0.02) 33.334%,
			rgba(161, 161, 161, 0.02) 33.334%,
			rgba(161, 161, 161, 0.02) 50.001000000000005%,
			rgba(154, 154, 154, 0.02) 50.001%,
			rgba(154, 154, 154, 0.02) 66.668%,
			rgba(77, 77, 77, 0.02) 66.668%,
			rgba(77, 77, 77, 0.02) 83.33500000000001%,
			rgba(10, 10, 10, 0.02) 83.335%,
			rgba(10, 10, 10, 0.02) 100.002%
		),
		linear-gradient(
			75deg,
			rgba(39, 39, 39, 0.03) 0%,
			rgba(39, 39, 39, 0.03) 20%,
			rgba(232, 232, 232, 0.03) 20%,
			rgba(232, 232, 232, 0.03) 40%,
			rgba(33, 33, 33, 0.03) 40%,
			rgba(33, 33, 33, 0.03) 60%,
			rgba(84, 84, 84, 0.03) 60%,
			rgba(84, 84, 84, 0.03) 80%,
			rgba(112, 112, 112, 0.03) 80%,
			rgba(112, 112, 112, 0.03) 100%
		),
		linear-gradient(
			103deg,
			rgba(174, 174, 174, 0.03) 0%,
			rgba(174, 174, 174, 0.03) 12.5%,
			rgba(190, 190, 190, 0.03) 12.5%,
			rgba(190, 190, 190, 0.03) 25%,
			rgba(191, 191, 191, 0.03) 25%,
			rgba(191, 191, 191, 0.03) 37.5%,
			rgba(23, 23, 23, 0.03) 37.5%,
			rgba(23, 23, 23, 0.03) 50%,
			rgba(227, 227, 227, 0.03) 50%,
			rgba(227, 227, 227, 0.03) 62.5%,
			rgba(71, 71, 71, 0.03) 62.5%,
			rgba(71, 71, 71, 0.03) 75%,
			rgba(162, 162, 162, 0.03) 75%,
			rgba(162, 162, 162, 0.03) 87.5%,
			rgba(85, 85, 85, 0.03) 87.5%,
			rgba(85, 85, 85, 0.03) 100%
		),
		linear-gradient(
			355deg,
			rgba(38, 38, 38, 0.02) 0%,
			rgba(38, 38, 38, 0.02) 25%,
			rgba(106, 106, 106, 0.02) 25%,
			rgba(106, 106, 106, 0.02) 50%,
			rgba(28, 28, 28, 0.02) 50%,
			rgba(28, 28, 28, 0.02) 75%,
			rgba(66, 66, 66, 0.02) 75%,
			rgba(66, 66, 66, 0.02) 100%
		),
		linear-gradient(
			137deg,
			rgba(38, 38, 38, 0.03) 0%,
			rgba(38, 38, 38, 0.03) 25%,
			rgba(211, 211, 211, 0.03) 25%,
			rgba(211, 211, 211, 0.03) 50%,
			rgba(4, 4, 4, 0.03) 50%,
			rgba(4, 4, 4, 0.03) 75%,
			rgba(24, 24, 24, 0.03) 75%,
			rgba(24, 24, 24, 0.03) 100%
		),
		linear-gradient(
			51deg,
			rgba(253, 253, 253, 0.03) 0%,
			rgba(253, 253, 253, 0.03) 14.286%,
			rgba(103, 103, 103, 0.03) 14.286%,
			rgba(103, 103, 103, 0.03) 28.572%,
			rgba(46, 46, 46, 0.03) 28.572%,
			rgba(46, 46, 46, 0.03) 42.858%,
			rgba(68, 68, 68, 0.03) 42.858%,
			rgba(68, 68, 68, 0.03) 57.144%,
			rgba(116, 116, 116, 0.03) 57.144%,
			rgba(116, 116, 116, 0.03) 71.42999999999999%,
			rgba(248, 248, 248, 0.03) 71.43%,
			rgba(248, 248, 248, 0.03) 85.71600000000001%,
			rgba(174, 174, 174, 0.03) 85.716%,
			rgba(174, 174, 174, 0.03) 100.002%
		),
		linear-gradient(
			283deg,
			rgba(20, 20, 20, 0.01) 0%,
			rgba(20, 20, 20, 0.01) 14.286%,
			rgba(23, 23, 23, 0.01) 14.286%,
			rgba(23, 23, 23, 0.01) 28.572%,
			rgba(19, 19, 19, 0.01) 28.572%,
			rgba(19, 19, 19, 0.01) 42.858%,
			rgba(134, 134, 134, 0.01) 42.858%,
			rgba(134, 134, 134, 0.01) 57.144%,
			rgba(4, 4, 4, 0.01) 57.144%,
			rgba(4, 4, 4, 0.01) 71.42999999999999%,
			rgba(254, 254, 254, 0.01) 71.43%,
			rgba(254, 254, 254, 0.01) 85.71600000000001%,
			rgba(87, 87, 87, 0.01) 85.716%,
			rgba(87, 87, 87, 0.01) 100.002%
		),
		linear-gradient(90deg, rgb(168, 1, 206), rgb(20, 120, 203));
	/* background-size: 600% 600%; */
	/* margin: 10px; */
	.StoryWrapper {
		.Story {
			width: 50vw;
			display: flex;
			flex-direction: column;
			right: 10%;
			/* left: 5%; */
			margin-top: 10%;
			position: absolute;
			text-align: left;
			top: 100%;
			/* margin-bottom: 10%; */
			bottom: 0;
			h2 {
				text-align: right;
				right: 10%;
				text-transform: uppercase;
				/* color: white; */
				/* font-size: 72px; */
				background: linear-gradient(270deg, #fcd703, #f57e0a);
				/* background: linear-gradient(270deg, #3bb7ff, #0a70f5); */
				/* background: white; */
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				text-align: right;
				/* color: rgb(255, 255, 255); */
				font-weight: 800;
				font-size: 3em;
				background-size: 50% 100%;
			}
			h1 {
				/* align-content: center;
				justify-content: center; */
				color: white;
				font-size: 1.2em;
				font-family: inherit;
				text-align: right;
				@media (max-width: 375px) {
					font-size: 0.8em;
				}
				@media (max-width: 425px) {
					font-size: 0.8em;
				}
			}
			.right {
				text-align: right;
				right: 0;
			}
		}
	}
`

const Article = () => {
	return (
		<Section2 id="about">
			<div className="StoryWrapper">
				<div className="Story">
					{' '}
					<h2>About Me</h2>
					<br />
					<h1 className="right">
						Hi, I'm a fresh graduation from Persada Indonesia University Y.A.I located in Jakarta. I
						have one year experience in web development. I passionate to learn about latest
						technology of software development.
						Here's a few technologies I've been working with recently: JavaScript (ES6+), HTML5 &
						(S)CSS, React, Laravel 5.5+
					</h1>
					<br />
				</div>
			</div>
		</Section2>
	)
}
export default Article
