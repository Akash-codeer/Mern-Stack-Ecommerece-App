import React from 'react'
import Layout from '../components/layout/layout'
import {Link} from 'react-router-dom'

const PagenotFound = () => {
  return (
    <Layout title={"Go Back-Page Not Found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page not found</h2>
        <Link to="/" className='pnf-btn'>
          Go Back
        </Link>
      </div>
    </Layout>
  )
}

export default PagenotFound
