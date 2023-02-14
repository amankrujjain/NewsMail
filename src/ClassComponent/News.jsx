import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            totalResults: 0,
            page: 1
        }
    }
    async getAPIData() {
        this.setState({ page: 1 })
        var rawdata
        if (this.props.search === '')
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=c66887260083453088f62057966b20eb`)
        else
            rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page}&apiKey=c66887260083453088f62057966b20eb`)
        var result = await rawdata.json()
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults
        })
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        var rawData = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}t&apiKey=5d3cb49955dd4cb9bce73a394608b7a6`)
        var result = await rawData.json()
        this.setState({ articles: this.state.articles.concat(result.articles) })
    }
    componentDidMount() {
        this.getAPIData()
    }
    componentDidUpdate(old) {
        if (this.props.q !== old.q || this.props.language !== old.language || this.props.pageSize !== old.pageSize || this.props.search !== old.search) {
            this.getAPIData()
        }
    }

    render() {
        return (
            <>
                <div className='container-fluid'>
                    {
                        this.props.search ?
                            <h3 className='background text-center text-light mt-2 p-2'>News related to '{this.props.search}'' </h3> :
                            <h3 className='background text-center text-light mt-2 p-2'>{this.props.q} News Section</h3>
                    }
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
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
                                this.state.articles.map((item, index) => {
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
}
