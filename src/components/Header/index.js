import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div>
          <ul className="list-items">
            <li>
              <Link to="/" className="item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="item">
                Jobs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="nav-mobile-view">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div>
          <ul className="list-items">
            <li>
              <Link to="/" className="item">
                <AiFillHome />
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="item">
                <BsFillBriefcaseFill />
              </Link>
            </li>
            <li>
              <Link to="/login" className="item">
                <FiLogOut />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
