import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {
    var[articles,setArticles] = useState([])
    var[totalResults,setTotalResults] = useState(0)
    var[page,setPage] = useState(1)
    async function getAPIData() {
        setPage(1)
        var rawdata
        if (props.search === '')
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
        else
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=${props.language}&pageSize=${props.pageSize}&page=${page}&apiKey=c66887260083453088f62057966b20eb`)
        var result = await rawdata.json()
        setArticles(result.articles)
        setTotalResults(result.totalResults)
    }
    const fetchMoreData = async () => {
        setPage(page+1)
        var rawData = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&pageSize=${props.pageSize}&page=${page + 1}t&apiKey=5d3cb49955dd4cb9bce73a394608b7a6`)
        var result = await rawData.json()
        setArticles(articles.concat(result.articles))
    }
    useEffect(()=>{
        getAPIData()
    },[props.language, props.pageSize, props.q, props.search])
        return (
            <>
                <div className='container-fluid'>
                    {
                        props.search ?
                            <h3 className='background text-center text-light mt-2 p-2'>News related to '{props.search}'' </h3> :
                            <h3 className='background text-center text-light mt-2 p-2'>{props.q} News Section</h3>
                    }
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length < totalResults}
                        loader={
                            <div className='container-fluid w-100 mt-5' style={{ height: "200px" }}>
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        }
                    >
                        <div className="row mb-5">
                            {
                                articles.map((item, index) => {
                                    return <NewsItem key={index}
                                        title={item.title}
                                        source={item.source.name}
                                        description={item.description}
                                        url={item.url}
                                        pic={item.urlToImage}
                                        date={item.publishedAt}
                                    />
                                })
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }