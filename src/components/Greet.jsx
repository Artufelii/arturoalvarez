import SocialList from "./SocialList"

const Greet = () => {
  return(
		<section className="greet">
			<div className="title">
				<h1>I'm Arturo Alvarez. Glad to see you!</h1>
			</div>
			<div className="me">
					<p>
						I’m a web developer, I started my career by learning code by myself, and since I began to learn I have worked on many personal projects and also as a freelance for startups here in my country, I have a great enthusiasm for work with great companies worldwide and to learn their professional practices to become a better developer, so I hope that we can work together on many projects.
					</p>
			</div>
			<div className="contact">
				<h3>LET'S CONNECT</h3>
				<SocialList />
			</div>
		</section>
  )
}

export default Greet
