import React from 'react'

const Header = () => {
  return (
    <div>
       <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li>
          <img
            className="social-network-img"
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="Git Hub"
          />
        </li>
        <li>
          {/* <img
            className="social-network-img"
            src="https://res.cloudinary.com/dmwrugc6z/image/upload/v1621681890/Background_4x_1_bzyjew.png"
            alt="Twitter"
          /> */}
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Header
