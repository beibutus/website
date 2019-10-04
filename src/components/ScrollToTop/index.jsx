import React from 'react'

export default ({ children, location }) => {
  React.useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }))
  return children
}