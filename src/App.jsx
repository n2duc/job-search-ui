import React from 'react'
import Footer from './components/footerdiv/Footer'
import Jobs from './components/jobdiv/Jobs'
import NavBar from './components/navbar/NavBar'
import Search from './components/searchdiv/Search'
import Value from './components/valuediv/Value'

const App = () => {
    return (
        <div className='w-[85%] m-auto bg-white'>
            <NavBar />
            <Search />
            <Jobs />
            <Value />
            <Footer />
        </div>
    )
}

export default App