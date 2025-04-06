
import PropTypes from "prop-types"
import "./header.css"

const Header = ({logo}) => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <hr />
      <h1>Investment <br></br> Calculator</h1>
      <hr />
      
    </header>
  )
}

export default Header

Header.propTypes = {
    logo:PropTypes.string.isRequired
}