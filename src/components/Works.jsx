import Work from "./Work"
import '../styles/App.css'

const Works = () => {
	return(
    <section className="works">
      <div className="works-container">
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680652946/personal/elrincon_fvhsxx.png"
          title='El Rincon'
          type='Full Stack dev'
          year='2022'
          desc='Administrative sistem for a restaurant'
          tech={['Next.js', 'MongoDB', 'Mongoose']}
          url='https://restaurante-web-eta.vercel.app/'
        />
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680652950/personal/tuhogar_h5rrju.png"
          title='Tu Hogar a Un Clic'
          type='Full Stack dev'
          year='2021'
          desc='A web page to help customers find the best price for their house'
          tech={['React', 'MongoDB', 'Node', 'Express']}
          url='https://www.tuhogaraunclic.com'
          reverse={true}
        />
        <Work 
          img="https://res.cloudinary.com/fragmods/image/upload/v1680652948/personal/farmaciajesus_ulxhlj.png"
          title='Farmacia Jesus'
          type='Full Stack dev'
          year='2019'
          desc='A web app for help customers to quote the price for their medicine'
          tech={['React', 'MongoDB', 'Python', 'Flask']}
          url='https://farmaciajesus.onrender.com/'
        />
      </div>
    </section>
	) 
}

export default Works
