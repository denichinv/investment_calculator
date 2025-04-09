
import PropTypes from "prop-types"
import "./header.css"

const Header = ({logo}) => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
    
      <h1>Investment Calculator</h1>
      
      
    </header>
  )
}

export default Header

Header.propTypes = {
    logo:PropTypes.string.isRequired
}