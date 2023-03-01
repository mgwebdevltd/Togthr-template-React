import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Home | MG WebDev Ltd</title>
        <meta property="og:title" content="Contact - Home | MG WebDev Ltd" />
      </Helmet>
      <div className="contact-banner">
        <header data-thq="thq-navbar" className="contact-navbar">
          <img
            alt="image"
            src="/playground_assets/logo_small-light-1500h.png"
            className="contact-branding"
          />
          <div data-thq="thq-burger-menu" className="contact-burger-menu">
            <div className="contact-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="contact-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="contact-nav"
            >
              <div className="contact-container1">
                <img
                  alt="image"
                  src="/playground_assets/logo_small-light-1500h.png"
                  className="contact-image"
                />
                <div data-thq="thq-close-menu" className="contact-menu-close">
                  <svg viewBox="0 0 1024 1024" className="contact-icon1">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="contact-nav1"
              >
                <span className="contact-text">About</span>
                <span className="contact-text01">Features</span>
                <span className="contact-text02">Pricing</span>
                <span className="contact-text03">Team</span>
                <span className="contact-text04">Blog</span>
              </nav>
              <div className="contact-container2">
                <a
                  href="http://portal.mgwebdev.eu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-login button"
                >
                  Login
                </a>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="contact-icon-group">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="contact-icon3"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="contact-icon5"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <h1 className="contact-text05">Contact</h1>
        <span className="contact-text06">Text</span>
      </div>
      <section className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-header-container">
            <div className="contact-header">
              <h1 className="contact-heading">
                <span>
                  Face-to-face with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="contact-text08"></br>
                <span className="contact-text09">web development</span>
                <br></br>
              </h1>
            </div>
            <p className="contact-caption">
              Connecting enterprise companies from around the world by touching
              suprising &amp; inspiring.
            </p>
            <button className="button contact-button">
              <span>
                <span>Get started today</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
