import './Orderlayout.css'
import Sidebar from '../../common/sidebar/Sidebar'
import Order from '../../pages/order/Order'

const Orderlayout = () => {
  return (
    <div className='OrderlayoutContainer'>
        <Sidebar/>
        <Order/>
    </div>
  )
}

export default Orderlayout