import {Link} from 'react-router-dom'

const Header = () => (
  <div className="headerContainer">
    <li>
      <Link to="/" className="nav-item">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="nav-item">
        About
      </Link>
    </li>
  </div>
)

export default Header
