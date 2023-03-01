import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <p data-role="accordion-content" className="accordion-content">
        {props.Content}
      </p>
    </div>
  )
}

AppComponent.defaultProps = {
  Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
}

AppComponent.propTypes = {
  Content: PropTypes.string,
}

export default AppComponent
