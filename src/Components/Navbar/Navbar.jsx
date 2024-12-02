import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">E-Volution</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar