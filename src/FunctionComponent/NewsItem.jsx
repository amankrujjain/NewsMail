import React from 'react'

export default function NewsItem (props) {
    return (
      <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
        <div className="card mb-2">
          <img src={props.pic} height='200px' className="card-img-top" alt="img"/>
            <div className="card-body">
              <h5 className="card-title" style={{height:'100px'}}>{props.title.slice(0,70)+'...'}</h5>
              <h6 style={{fontSize:'13px'}}>Source : {props.source}</h6>
              <h6 style={{fontSize:'13px'}}>Date : {props.date}</h6>
              <hr/>
              <p className="card-text" style={{height:'230px'}}>{props.description}</p>
              <a href={props.url} className="btn readmore-background text-light w-100 btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
