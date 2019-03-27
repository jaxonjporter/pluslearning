import React from 'react'
import { Link, } from 'react-router-dom'

const NoMatch = () => (
  <>
    <h1>404: Page Not Found</h1>
    <br />
    <br />
    <h3>Return <Link to='/'>Home</Link></h3>
  </>
)

export default NoMatch
