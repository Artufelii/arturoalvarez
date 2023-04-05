const Work = ({ img, title, type, year, desc, tech, url, reverse = false }) => {
	return (
		<div className={`card ${reverse ? 'row-reverse' : ''}`}>
			<div className="image-container">
				<img src={img} alt="Example" />
			</div>
			<div className="info">
				<h2 className="info-title">
					{title}
				</h2>
				<div className="canopy">
					<p>CANOPY</p>
					<ul>
						<li>{type}</li>
						<li>{year}</li>
					</ul>
				</div>
				<div className="extract">
					<p>{desc}</p>
				</div>
				<ul className="technologies">
					{tech.map((t, i) => <li key={i}>{t}</li>)}
					
				</ul>
				<a href={url} className="see" target='_blank'>See project</a>
			</div>
		</div>
	)
}

export default Work
