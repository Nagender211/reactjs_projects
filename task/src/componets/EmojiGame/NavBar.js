import React from 'react'

const NavBar = (props) => {
    const {score,highScore}=props
  return (
    <div>
        <nav>
          <ul>
            <li>score: {score}</li>
            <li>High Score: {highScore}</li>
          </ul>
        </nav>
        <h1>Welcome to our Website!</h1>
  
      
    </div>
  )
}

export default NavBar
