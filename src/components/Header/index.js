import './index.css'

export default function Header() {
  return (
    <div className="header-container">
      <div>
        <h1 className="covid-heading">
          COVID19<span className="heading-india">INDIA</span>
        </h1>
      </div>
      <div className="home-about-container">
        <p className="home-para">Home</p>
        <p className="about-para">About</p>
      </div>
    </div>
  )
}
