import '../styles/App.css'

const Header = ({ openMenu, setOpenMenu }) => {
  return (
    <header className={`header ${openMenu ? 'filter' : ''}`}>
      <div className="logo">
        <a href="/" className="a">
          Arturo Alvarez
        </a>
      </div>
      <nav className="menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setOpenMenu(!openMenu)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
        <ul className="menu-list">
          <li><a href="/">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
