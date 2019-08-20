import React from 'react'
import styled from 'styled-components'

const InfoBoxWrapper = styled.div`
	position: absolute;
	/* background-color: #fff; */
	top: 24vh;
	left: 16vw;
	right: 10vw;
	z-index: 10;
	font-family: sans-serif;
	text-align: right;

	h1 {
		/* font-size: 72px; */
		/* background: linear-gradient(270deg, #f5a30a, #fcd703); */
		/* background: linear-gradient(270deg, #3bb7ff, #0a70f5); */
		background: white;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: right;
		/* color: rgb(255, 255, 255); */
		font-weight: 800;
		font-size: 3em;
		@media (min-width: 375px) {
			font-size: 3em;
		}
		@media (min-width: 425px) {
			font-size: 3.25em;
			margin-bottom: 2px;
		}
	}
`

const InfoBox = props => {
	return <InfoBoxWrapper>{props.children}</InfoBoxWrapper>
}

export default InfoBox
