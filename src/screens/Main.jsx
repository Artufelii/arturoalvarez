import Greet from "../components/Greet"
import Works from "../components/Works"
import About from "../components/About"

const Main = ({ openMenu }) => {
  return(
    <main className={openMenu ? 'filter' : null}>
      <Greet />
      <Works />
      <About />
    </main>
  ) 
}

export default Main
