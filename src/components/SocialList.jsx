import github from '../assets/Vector.svg'
import linkedin from '../assets/Linkedin icon.svg'
import instagram from '../assets/instagram.webp'
import facebook from '../assets/facebook.webp'

const SocialList = () => {
	return(
		<ul className="social">
			<li>
				<a href="https://github.com/Artufelii" className="a">
					<img src={github} alt="Github logo" />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/arturo-alvarez-martinez-ab9b77151/" className="a">
					<img src={linkedin} alt="Linkedin logo" />
				</a>
			</li>
			<li style={{width: 20, height: 20}}>
				<a href="https://www.instagram.com/artufelii/" className="a">
					<img src={instagram} alt="Instagram logo" style={{maxWidth: '100%', maxHeight: '100%'}}/>
				</a>
			</li>
			<li style={{maxWidth: 20, maxHeight: 20}}>
				<a href="https://www.facebook.com/artufeli/" className="a">
					<img src={facebook} alt="Facebook logo" style={{maxWidth: '100%', maxHeight: '100%'}}/>
				</a>
			</li>
		</ul>
	)
}

export default SocialList
