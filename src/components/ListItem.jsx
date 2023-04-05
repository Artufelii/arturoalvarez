const ListItem = ({ img, title }) => {
	return(
		<li>
			<div style={{ width: 50, height: 50 }}>
				<img src={img} alt={title} style={{ width: '100%' }} />
			</div>
			{title}
		</li>
	) 
}

export default ListItem
