import React from 'react'
import styled from 'styled-components'

const JobsBoxWrapper = styled.div`
	/* background-color: hsl(185, 96%, 33%); */
	/*background: linear-gradient(270deg, #fcd703, #f57e0a);*/
	background: linear-gradient(
		270deg,
		${props => (props.first ? props.first : '#fcd703')},
		${props => (props.second ? props.second : '#f57e0a')}
	);
	/* background-size: 300% 300%; */

	position: absolute;
	text-align: ${props => (props.textAlign ? props.textAlign : 'right')};
	/* left:20%; */
	right: 0;
	z-index: -1;

	h4 {
		/* text-align: right; */
		/* background-color: #fff; */
		color: ${props => (props.color ? props.color : 'white')};
		/* z-index:1001; */
		margin: 5px;
		font-family: sans - serif;
		font-size: 1em;
		font-weight: 200;
		justify-content: space - between;
	}
`

const JobsBox = props => {
	return <JobsBoxWrapper {...props}>{props.children}</JobsBoxWrapper>
}

export default JobsBox
