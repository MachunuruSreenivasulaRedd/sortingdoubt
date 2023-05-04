import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const username = 'rahul'
const password = 'rahul@2021'

class Login extends Component {
  onSuccessLogin = Token => {
    const {history} = this.props
    Cookies.set('jwt_token', Token, {expires: 2})
    history.replace('/')
  }

  onFormSubmission = async event => {
    event.preventDefault()
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <form onSubmit={this.onFormSubmission} className="formContainer">
        <h1 className="heading">Please Login</h1>
        <button type="submit" className="login-btn">
          Login with Sample Creds
        </button>
      </form>
    )
  }
}

export default Login
