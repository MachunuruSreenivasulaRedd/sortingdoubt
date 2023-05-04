import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" className="logout-btn" onClick={onLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
