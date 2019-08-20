import React from 'react'
import NavBar from './components/NavBar/NavBar'
import IconBox from './components/InfoBox/IconBox'
import InfoBox from './components/InfoBox/InfoBox'
import Section from './Pages/Home/Section'
import Section2 from './Pages/Home/Section2'
import JobsBox from './components/InfoBox/JobsBox'

const App = () => {
	return (
		<React.Fragment>
			<NavBar />
			<Section />
			<Section2 />
			<InfoBox>
				{/* <img
					src={logo}
					onMouseEnter={scaleUp}
					onMouseLeave={scaleDown}
					ref={element => {
						logoElement = element
					}}
					className="App-logo"
					alt="logo"
				/> */}
				<h1>ILHAM GUSTI WIBOWO</h1>
				<JobsBox textAlign="right" first="#fada21" second="#fa981d">
					<h4>Web Developer & Software Engineer</h4>
				</JobsBox>
				<IconBox />
			</InfoBox>
		</React.Fragment>
	)
}

export default App
