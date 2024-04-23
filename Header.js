import React from 'react'
import '../components/Header.css';

const Navbar = () => {
  return (
    <div>
       <div style={{height : 60,backgroundColor:'lightgreen',colour:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <div className="logo">
          {/* <img src= "images/peoplelogo" alt="People Logo" /> */}
          <span>TEXSMARTLY</span>
        </div>

        <div className="search-employees">
         
         <input type="text" placeholder="Search Employees" />
         {/* <img src= "images/searchlogo" className='saurav' alt="Search Icon" /> */}
       </div>
       <div className="account">
          {/* <img src="accountlogo" alt="Account Icon" /> */}
          <span>Account</span>
        </div>
        <div className="notifications">
          {/* <img src= "images/notificationlogo"  alt="Notifications Icon" /> */}
          <span>Notifications</span>
        </div>
      Header
      </div>
     
    </div>
  )
}

export default Navbar
