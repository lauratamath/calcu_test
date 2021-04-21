import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  constructor(props) {
    super(props)
    const {
      color,
    } = this.props
    this.state = {
      color,
    }
  }

  render() {
    const {
      text,
      click,
    } = this.props

    const {
      color,
    } = this.state

    const buttonsStyle = {
      backgroundColor: color,
      border: '4px solid #FFFFFF',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '120px',
      height: '100px',
    }
    const letterStyle = {
      margin: '0px',
      fontSize: '35px',
      fontFamily: 'Lucida Sans Typewriter',
      color: '#208ba1',
    }

    return (
      <div
        aria-hidden
        role="button"
        style={buttonsStyle}
        onFocus={() => 0}
        onClick={click}
        onKeyDown={() => 0}
      >
        <h5 style={letterStyle}>{text}</h5>
      </div>
    )
  }
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
  color: PropTypes.string,
  text: PropTypes.string,
}

Button.defaultProps = {
  color: '#208ba1',
  text: ' ',
}

export default Button
