import React, { Component } from 'react'
import '../assets/css/index.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      s: ''
    }
  }
  getData(e) {
    this.setState({ s: e.target.value })
  }
  postData(e) {
    e.preventDefault()
    document.getElementById('search').value=''
    this.props.searchNews(this.state.s)
  }
  render() {
    return (
      <>
        <nav className="background navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/" onClick={()=>this.props.searchNews('')}>NewsMail</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" to="/" onClick={()=>this.props.searchNews('')}>All News</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/politics" onClick={()=>this.props.searchNews('')}>Politics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science" onClick={()=>this.props.searchNews('')}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/technology" onClick={()=>this.props.searchNews('')}>Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/covid" onClick={()=>this.props.searchNews('')}>Covid19</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Others
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/education" onClick={()=>this.props.searchNews('')}>Education</Link></li>
                    <li><Link className="dropdown-item" to="/crime" onClick={()=>this.props.searchNews('')}>Crime</Link></li>
                    <li><Link className="dropdown-item" to="/sports" onClick={()=>this.props.searchNews('')}>Sports</Link></li>
                    <li><Link className="dropdown-item" to="/business" onClick={()=>this.props.searchNews('')}>Business</Link></li>
                    <li><Link className="dropdown-item" to="/cricket" onClick={()=>this.props.searchNews('')}>Cricket</Link></li>
                    <li><Link className="dropdown-item" to="/jokes" onClick={()=>this.props.searchNews('')}>Jokes</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment" onClick={()=>this.props.searchNews('')}>Entertainment</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </Link>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('hi')}>Hindi</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changeLanguage('en')}>English</button></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Page size
                  </Link>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={() => this.props.changePageSize(8)}>8</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changePageSize(12)}>12</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changePageSize(16)}>16</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changePageSize(20)}>20</button></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex w-50" role="search" onSubmit={(e)=> this.postData(e)}>
                <input className="form-control me-2" id='search' type="search" name='search' placeholder="Search Here" aria-label="Search" onChange={(e)=>this.getData(e)} />
                <button className="btn search-border" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
