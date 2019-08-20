import React from 'react'
import styled, { css } from 'styled-components'

export const NavIconWrapper = styled.section`
	width: 55px;
	height: 44px;
	position: relative;
	top: 5vh;
	${props =>
		props.open
			? css`
					left: 80%;
			  `
			: CSS`left:40%;`}
	z-index:1002;
	/* overflow: hidden; */
	/* background: hsla(0, 0%, 76%, 0.6); */
	cursor: pointer;
	transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
`

const TopBarIcon = styled.span`
	width: 55px;
	height: 3px;
	display: block;
	background: #fcd703;
	position: absolute;
	top: 10px;
	transform: rotate(0);
	transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
`
const MiddleBarIcon = styled.span`
	width: 45px;
	height: 3px;
	display: block;
	background: #fcd703;
	position: absolute;
	top: 20px;
	transform: rotate(0);
	transition: all 800ms cubic-bezier(0.9, 0, 0.33, 1);
`

const BottomBarIcon = styled.span`
	width: 40px;
	height: 3px;
	display: block;
	background: #fcd703;
	position: absolute;
	top: 30px;
	transform: rotate(0);
	transition: all 800ms cubic - bezier(0.9, 0, 0.33, 1);
`

const NavIcon = props => {
	return (
		<NavIconWrapper onClick={props.clicked} open={props.clicked}>
			<TopBarIcon />
			<MiddleBarIcon />
			<BottomBarIcon />
		</NavIconWrapper>
	)
}

export default NavIcon
