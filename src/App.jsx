import './App.css'

function App() {
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
            <h1 className="title-script">Grace, Spirit and Beauty</h1>

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
              <p>RSVP to <a href="mailto:mvicenzino@gmail.com">mvicenzino@gmail.com</a> or text me at <a href="tel:917-968-9614">917-968-9614</a>.</p>
            </div>
          </div>
        </div>

        <div className="actions">
          <a href="mailto:mvicenzino@gmail.com" className="rsvp-button">
            RSVP via Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
