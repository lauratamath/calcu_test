import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ text }) => {
  const bodyStyle = {
    backgroundColor: '#D3DDE3',
    width: '625px',
    height: '175px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
  const fontStyleCal = {
    margin: '0px',
    marginRight: '20px',
    fontSize: '90px',
    fontFamily: 'Lucida Sans Typewriterf',
  }
  return (
    <div style={bodyStyle} id="Screen">
      <h5 style={fontStyleCal}>{text}</h5>
    </div>
  )
}

Screen.propTypes = {
  text: PropTypes.string,
}

Screen.defaultProps = {
  text: ' ',
}

export default Screen
