import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [animationDone, setAnimationDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true)
    }, 2200) // Wait for animation to finish
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="invitation-wrapper">
      <div className="frame-border"></div>
      <div className="invitation-container">
        <div className="invitation-card">

          {/* Background Image */}
          <div className="bg-layer">
            <img src="/bg-horse-subtle.png" alt="" className="horse-img" />
          </div>

          {/* Content */}
          <div className="content-layer">
            <h1 className="title-script">
              {animationDone ? (
                "Grace, Spirit and Beauty"
              ) : (
                "Grace, Spirit and Beauty".split("").map((char, index) => (
                  <span key={index} style={{ animationDelay: `${index * 0.05}s` }} className={char === " " ? "space" : ""}>
                    {char}
                  </span>
                ))
              )}
            </h1>

            <div className="section intro">
              <p>Please join us for an evening of dinner, drinks, and celebration for Carolyn’s birthday.</p>
            </div>

            <div className="section body-text">
              <p>We look forward to celebrating with you at the historic Old Mill Inn for a night of joy and elegance.</p>
            </div>

            <div className="section details">
              <p className="highlight">Friday, January 9th, 2026</p>
              <p className="highlight time">From 6:30pm to 10:30pm</p>
              <p className="venue">The Grain House at the Old Mill Inn</p>
              <p className="address">225 US-202, Basking Ridge, New Jersey 07920</p>
            </div>

            <div className="section rsvp">
              <p>RSVP to <a href="mailto:mvicenzino@gmail.com?subject=Carolyn's Birthday RSVP&body=Hey!%0A%0AWe'd love to see you for Carolyn's birthday celebration!%0A%0A📅 Friday, January 9th, 2026%0A🕡 6:30pm - 10:30pm%0A📍 The Grain House at the Old Mill Inn%0A    225 US-202, Basking Ridge, NJ 07920%0A%0APlease let me know if you can attend:%0A%0A◉ Yes, I'll be there!%0A○ No, I can't make it%0A○ Maybe, I'll let you know%0A%0A(Move the ◉ to your answer)%0A%0AName: %0ANumber of guests: %0A%0ALooking forward to celebrating with you!">mvicenzino@gmail.com</a> or text me at <a href="tel:917-968-9614">917-968-9614</a>.</p>
            </div>
          </div>
        </div>

        <div className="actions">
          <a href="https://forms.gle/Ed66xhP3X5GrELhe6" target="_blank" rel="noopener noreferrer" className="rsvp-button primary">
            RSVP Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
