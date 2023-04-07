import Work from "./Work"
import '../styles/App.css'

const Works = () => {
	return(
    <section className="works">
      <div className="works-container">
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680906064/censos_t7jvni.png"
          title='Censos App'
          type='Full Stack dev'
          year='2022'
          desc='This is a Web app version took from Desktop app version to register all business from Coacalco City, Mexico you can access with the user Artufelii and password Suavicrema2709! to prove all the features that contains (is not the final version, it has a little bugs that will resolve in a new version)'
          tech={['Rust', 'Rocket', 'React', 'Typescript', 'MySQL']}
          url='https://censos-api.onrender.com/'
        />
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680652946/personal/elrincon_fvhsxx.png"
          title='El Rincon'
          type='Full Stack dev'
          year='2022'
          desc='Administrative sistem for a restaurant and also to bring clients a more easy experience with the menu, to prove al the features you can access with the user Artufelii and password Suavicrema2709'
          tech={['Next.js', 'MongoDB', 'Mongoose']}
          url='https://restaurante-web-eta.vercel.app/'
          reverse={true}
        />
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680652950/personal/tuhogar_h5rrju.png"
          title='Tu Hogar a Un Clic'
          type='Full Stack dev'
          year='2021'
          desc='A web page to help customers find the best price for their house, also implement a form contact that allow clients to contact directly the company'
          tech={['React', 'MongoDB', 'Node', 'Express']}
          url='https://www.tuhogaraunclic.com'
        />
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680652948/personal/farmaciajesus_ulxhlj.png"
          title='Farmacia Jesus'
          type='Full Stack dev'
          year='2019'
          desc='A web app for help customers to quote the price for their medicine and ask for the disponibility of some products through the form contact'
          tech={['React', 'MongoDB', 'Python', 'Flask']}
          url='https://farmaciajesus.onrender.com/'
          reverse={true}
        />
      </div>
    </section>
	) 
}

export default Works
