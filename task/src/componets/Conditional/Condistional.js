import React from 'react'

const Condistional = props => {
    const {name, hello}= props
  return (
    <div>
        <h1>{name}, {hello}</h1>
      
    </div>
  )
}
Condistional.defaultProps={
    name: "Nagendr",
    hello: 'Hello'
}

export default Condistional
