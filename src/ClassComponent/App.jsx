import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'
import Footer from './Footer'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            language:"hi",
            pageSize:8,
            search:''
        }
    }
    changeLanguage=(data)=>{
        this.setState({language:data})
    }
    changePageSize=(data)=>{
        this.setState({pageSize:data})
    }
    searchNews=(data)=>{
        this.setState({search:data})
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar searchNews={this.searchNews} changeLanguage={this.changeLanguage} changePageSize={this.changePageSize} />
                <Routes>
                    <Route path='/' element={<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='All'/>}/>
                    <Route path='/politics'  element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Politics'/>}/>
                    <Route path='/science' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Science'/>}/>
                    <Route path='/technology' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Technology'/>}/>
                    <Route path='/covid' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Covid'/>}/>
                    <Route path='/education' element={<News search={this.state.search} pageSize={this.state.pageSize}  language={this.state.language} q='Education'/>}/>
                    <Route path='/crime' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Crime'/>}/>
                    <Route path='/sports' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Sports'/>}/>
                    <Route path='/business' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Business'/>}/>
                    <Route path='/cricket' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Cricket'/>}/>
                    <Route path='/jokes' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Jokes'/>}/>
                    <Route path='/entertainment' element={<News search={this.state.search} pageSize={this.state.pageSize} language={this.state.language} q='Entertainment'/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
    }
}