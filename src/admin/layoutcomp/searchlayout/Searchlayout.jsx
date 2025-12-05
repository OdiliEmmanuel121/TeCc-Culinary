import React from 'react'
import Sidebar from '../../common/sidebar/Sidebar'
import Search from '../../pages/search/Search'

const Searchlayout = () => {
  return (
    <div className='SearchlayoutContainer'>
        <Sidebar/>
        <Search/>
    </div>
  )
}

export default Searchlayout