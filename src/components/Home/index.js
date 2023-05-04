import {Component} from 'react'

import {BiSearchAlt} from 'react-icons/bi'
import {FiGithub, FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import './index.css'

class Home extends Component {
  state = {Data: []}

  componentDidMount = () => {
    this.getApiCall()
  }

  getApiCall = async () => {
    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({Data: data})
  }

  render() {
    const {Data} = this.state

    return (
      <div>
        <div className="app-main-container">
          <div className="app-content-container">
            <div className="input-container">
              <BiSearchAlt className="search-icon-container" />
              <input
                className="search-input"
                type="search"
                placeholder="Enter the State"
              />
            </div>
            <div className="home-states-and-cases-main-container">
              <div className="states-main-headings">
                <div className="states-row-main-heading">
                  <p>States/UT</p>
                  <FcGenericSortingAsc className="sorting-asc" />
                  <FcGenericSortingDesc className="sorting-desc" />
                </div>
                <div className="remaining-headings">
                  <p>Confirmed</p>
                  <p>Active</p>
                  <p>Recovered</p>
                  <p>Deceased</p>
                  <p>Population</p>
                </div>
              </div>
              <hr className="h-r" />
            </div>
            <div className="follow-us-container">
              <h1 className="covid-heading">
                COVID19<span className="heading-india">INDIA</span>
              </h1>
              <p className="follow-us-para">
                we stand with everyone fighting on the front lines
              </p>
              <div className="icons-container">
                <FiGithub className="git-hubs-logo" />
                <BsInstagram className="instagram-logo" />
                <FiTwitter className="twitter-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
