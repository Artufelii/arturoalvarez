import { useState } from "react"
import SocialList from "./SocialList"
import ListItem from "./ListItem"
import javascript from '../assets/js.png'
import typescript from '../assets/typescript.webp'
import html from '../assets/html.png'
import css from '../assets/css.png'
import python from '../assets/round8.webp'
import express from '../assets/express.webp'
import next from '../assets/next.webp'
import reactLogo from '../assets/react.webp'
import flask from '../assets/flask.webp'
import mongo from '../assets/mongodb.webp'
import sql from '../assets/pngegg.png'
import api from '../assets/api.webp'
import rust from '../assets/rust.webp'
import rocket from '../assets/rocket.webp'
import resume from '../assets/ArturoAlvarez-Resume.pdf'

const About = () => {
	const [showLanguages, setShowLanguages] = useState(false)
	const [showFrameworks, setShowFrameworks] = useState(false)
	const [showSkills, setShowSkills] = useState(false)

	const languages = [
		{img: javascript, title: 'JavaScript'},
		{img: typescript, title: 'TypeScript'},
		{img: python, title: 'Python'},
		{img: rust, title: 'Rust'},
		{img: html, title: 'HTML'},
		{img: css, title: 'CSS'},
	]

	const frameworks = [
		{img: reactLogo, title: 'React js'},
		{img: express, title: 'Express'},
		{img: next, title: 'Next js'},
		{img: flask, title: 'Flask'},
		{img: rocket, title: 'Rocket'},
	]

	const skills = [
		{img: mongo, title: 'MongoDB'},
		{img: sql, title: 'SQL'},
		{img: api, title: 'API rest'},
	]

	return(
		<section className="about" id="about">
			<div className="contact-info">
				<div className="title full-width">
					<h1>About Myself</h1>
				</div>
				<div className="me position" >
						<p>
								Hello I’m a software developer! I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
						</p>
				</div>
				<div className="contact position">
					<h3>LET'S CONNECT</h3>
					<div className="with half-width">
						<SocialList />
					</div>
					<a href={resume} download="ArturoAlvarez-Resume" className="see quarter-width">Get my resume</a>
				</div>
			</div>
			<ul className="skills">
				<li className="skill" onClick={() => setShowLanguages(!showLanguages)}>
					<div className="name">
						<p>Languages</p>
						{showLanguages ? 
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
							:
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						}
					</div>
					{showLanguages ? 
						<ul className="languages-list">
							{languages.map((language, index) => <ListItem key={index} img={language.img} title={language.title} />)}	
						</ul>
						: null
					}
				</li>
				{showLanguages ? null : <hr />}
				<li className="skill" onClick={() => setShowFrameworks(!showFrameworks)}>
					<div className="name">
						<p>Frameworks</p>
						{showFrameworks ? 
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
							:
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						}
					</div>
					{showFrameworks ? 
						<ul className="languages-list">
							{frameworks.map((language, index) => <ListItem key={index} img={language.img} title={language.title} />)}	
						</ul>
						: null
					}
				</li>
				{showFrameworks ? null : <hr />}
				<li className="skill">
					<div className="name" onClick={() => setShowSkills(!showSkills)}>
						<p>Skills</p>
						{showSkills ? 
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
							:
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
							</svg>
						}
					</div>
					{showSkills ? 
						<ul className="languages-list">
							{skills.map((skill, index) => <ListItem key={index} img={skill.img} title={skill.title} />)}	
						</ul>
						: null
					}
				</li>
				{showSkills ? null : <hr />}
			</ul>
			<div className="form-section" id="contact">
				<h1>Contact me</h1>
				<p>If you have an application you are interested in developing, a feature that you need built or a project that needs coding. 
	I’d love to help with it!</p>
				<form className="form" action="https://formspree.io/f/xnqybwkl" method="POST">
					<input name="name" type="text" placeholder="Name" maxLength="30" required />
					<input name="email" type="email" placeholder="Email" required />
					<textarea id="message" name="message" placeholder="Write your message here..." maxLength="500" required></textarea>
					<button type="submit" className="see align-center high-contrast">Get in touch</button>
				</form>
			</div>
		</section>
	) 
}

export default About
