import React from 'react'

import PropTypes from 'prop-types'

import './content.css'

const Content = (props) => {
  return (
    <div className="content-container">
      <p data-role="accordion-content" className="accordion-content">
        {props.Content}
      </p>
    </div>
  )
}

Content.defaultProps = {
  Content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
}

Content.propTypes = {
  Content: PropTypes.string,
}

export default Content
