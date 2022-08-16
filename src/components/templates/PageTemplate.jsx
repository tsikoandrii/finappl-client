import React from 'react'
import PropTypes from 'prop-types'

import Header from '@organisms/Header'
import Footer from '@organisms/Footer'

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node,
}

export default PageTemplate
