import styled from 'styled-components'
import React from 'react'
import GithubIcon from '../Icons/GithubIcon'
import Telegram from '../Icons/Telegram'
import Email from '../Icons/Email'
import Twitter from '../Icons/Twitter'
import Button from '../Button/Button'

const IconBoxWrapper = styled.div`
	position: absolute;
	color: white;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row-reverse;
	justify-content: space-between;
	margin-top: 50px;
	right: 0;
	/* background-color: #fff; */
	/* height: 35px; */
	width: 240px;

	h4 {
		font-size: 1em;
		font-weight: 600;
		color: black;
		padding: 8px;
		text-transform: uppercase;
		/* background-color: white; */
		margin-bottom: 10px;
	}
`

const IconBox = () => {
	return (
		<IconBoxWrapper>
			<h4>
				<a href="https://twitter.com/ilhmgst">
					<Twitter width="24" height="24" fill="currentColor" />
				</a>
			</h4>
			<h4>
				<a href="https://github.com/ilhamgusti">
					<GithubIcon width="24" height="24" fill="currentColor" />
				</a>
			</h4>
			<h4>
				<a href="https://t.me/ilhamgusti">
					<Telegram width="24" height="24" color="currentColor" />
				</a>
			</h4>
			<h4>
				<a href="ilham.wibowo51@gmail.com">
					<Email width="24" height="24" color="currentColor" />
				</a>
			</h4>
			<Button href="https://twitter.com/messages/compose?recipient_id=250530492&text=Hi">
				{' '}
				contact me
			</Button>
		</IconBoxWrapper>
	)
}

export default IconBox
