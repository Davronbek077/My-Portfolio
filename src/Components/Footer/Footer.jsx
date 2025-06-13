import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className="contact">
        <div className="address">
            <h3>My Address</h3>
            <p id='country'>Country: Uzbekistan</p>
            <p>Region: Namangan</p>
        </div>

        <div className="number">
            <h3>My Number</h3>
            <p>+998 91 179 24 25</p>
        </div>

        <div className="email">
            <h3>My Email</h3>
            <p>rahmonovdavronbek770@gmail.com</p>
        </div>

        <div className="telegram">
            <h3>My username in telegram</h3>
            <p>@Lite_W7</p>
        </div>
      </div>


      <div className="message">
        <div className="email-input">
            <input type="text" placeholder='Enter your email' />
        </div>

        <div className="message-input">
            <textarea rows={10} placeholder='Enter your message'></textarea>
        </div>

        <div className="message-btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
