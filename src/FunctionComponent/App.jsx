import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import News from './News'
import Footer from './Footer'

export default function App() {
    var [language,setLanguage] = useState('hi')
    var [pageSize,setPageSize] = useState(8)
    var [search,setSearch] = useState('')

    const changeLanguage=(data)=>{
        setLanguage(data)
    }
    const changePageSize=(data)=>{
        setPageSize(data)
    }
    const searchNews=(data)=>{
        setSearch(data)
    }
        return (
            <BrowserRouter>
                <Navbar searchNews={searchNews} changeLanguage={changeLanguage} changePageSize={changePageSize} />
                <Routes>
                    <Route path='/' element={<News search={search} pageSize={pageSize}  language={language} q='All'/>}/>
                    <Route path='/politics'  element={<News search={search} pageSize={pageSize} language={language} q='Politics'/>}/>
                    <Route path='/science' element={<News search={search} pageSize={pageSize} language={language} q='Science'/>}/>
                    <Route path='/technology' element={<News search={search} pageSize={pageSize} language={language} q='Technology'/>}/>
                    <Route path='/covid' element={<News search={search} pageSize={pageSize} language={language} q='Covid'/>}/>
                    <Route path='/education' element={<News search={search} pageSize={pageSize}  language={language} q='Education'/>}/>
                    <Route path='/crime' element={<News search={search} pageSize={pageSize} language={language} q='Crime'/>}/>
                    <Route path='/sports' element={<News search={search} pageSize={pageSize} language={language} q='Sports'/>}/>
                    <Route path='/business' element={<News search={search} pageSize={pageSize} language={language} q='Business'/>}/>
                    <Route path='/cricket' element={<News search={search} pageSize={pageSize} language={language} q='Cricket'/>}/>
                    <Route path='/jokes' element={<News search={search} pageSize={pageSize} language={language} q='Jokes'/>}/>
                    <Route path='/entertainment' element={<News search={search} pageSize={pageSize} language={language} q='Entertainment'/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
    }