
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './admin/pages/home/Home'
import Order from './admin/pages/order/Order'
import Search from './admin/pages/search/Search'
import Profile from './admin/pages/profile/Profile'
import Layout from './admin/layoutcomp/layout/Layout'
import Orderlayout from './admin/layoutcomp/orderlayout/Orderlayout'
import Searchlayout from './admin/layoutcomp/searchlayout/Searchlayout'
import Profilelayout from './admin/layoutcomp/profilelayout/Profilelayout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Layout />} />

          <Route path='/order' element={<Order />} />
          <Route path='/or' element={<Orderlayout />} />


          <Route path='/search' element={<Search />} />
        <Route path='/sea' element={<Searchlayout/>} />


          <Route path='/profile' element={<Profile />} />
          <Route path='/pro' element={<Profilelayout />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App