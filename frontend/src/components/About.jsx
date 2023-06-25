import React from 'react'

function About() {
  return (
    <div className='main-div about-div'>
      <div className='about-1'>
        <div className='about-1-1'>
          <div className='heading-div'>
            <h1>About page</h1>
          </div>
          <div className='about-para-div'>
            <p className='about-para'>
              This is a blog website made using MERN stack technology. Users can make use of this application to write their blogs or even just to make some temporary notes.
              Users can add and remove blogs whenever they want.
            </p>
            <p className='about-para'>
              To add a blog enter the blog title and blog description in the form provided in the Home page and click 'Add Blog' to submit. The blog will be stored in the database and you can access them from the website whenever you want.
            </p>
            <p className='about-para'>
              To delete a blog, click the trash can icon beside the blog you want to delete, and it will be deleted from the database. Once it's gone, cannot be brought back.. think carefully before deleting :)
            </p>
            <p>
              Thank you!
            </p>
          </div>
        </div>
        <div className='about-1-2'>
          <img className='blog-image' src='src\assets\blog.jpg' />
        </div>
      </div>
      <div className="about-2">
        <div className='about-card'>
          <div className='about-card-inner'>
            <div>
              <p>
                Designed and Developed by: Phani Aditya
              </p>
            </div>
            <div className='contact-div'>
              <div>
                <h2>
                  Contact
                </h2>
                <p>
                  Email : <a href='mailto:chphaniadity@gmail.com'>chphaniaditya@gmail.com</a>
                </p>
              </div>
              <div className='icon-div'>
                <div className='linkedin-icon-div'>
                  <a target='blank' href='https://www.linkedin.com/in/phaniaditya-ch-9177a123b/'>
                    <img className='linkedin-icon icon' src='src\assets\linkedin.png' alt='linkedin' />
                  </a>
                </div>
                <div className='instagram-icon-div'>
                  <a target='blank' href='https://www.instagram.com/phaniaditya_ch/'>
                    <img className='instagram-icon icon' src='src\assets\instagram.png' alt='instagram' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
