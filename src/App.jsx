import Main from './screens/Main'
import Header from './components/Header'
import './styles/App.css'
import Menu from './components/Menu'
import {useState} from 'react'

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Main openMenu={openMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
    </>
  )
}

export default App
