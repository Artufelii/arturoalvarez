import '../styles/Menu.css'
const Menu = ({ openMenu, setOpenMenu }) => {
	return(
		<div className={`cover ${openMenu ? 'show' : ''}`}>
			<div className="button" onClick={() => setOpenMenu(!openMenu)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
			<ul>
				<li>
					<a href="/" className='link'>
						Portfolio
					</a>
				</li>
				<li>
					<a href="#about" className='link'>
						About
					</a>
				</li>
				<li>
					<a href="#contact" className='link'>
						Contact
					</a>
				</li>
			</ul>
		</div>
	) 
}

export default Menu
