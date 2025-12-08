import './Order.css'
import Or1 from '../../../assets/Or1.png'
import Or2 from '../../../assets/Or2.png'
import Or3 from '../../../assets/Or3.png'
import Box from '@mui/material/Box';

const Order = () => {
  return (
    <div className='OrderContainer' >
      <div className='OrderFirstSection'>
        <h2> Hello Toyin </h2>
        <div className='OrderCardBoxContainer'>
          <div className='FBox01' >
            <a href="#" className="FBoxtext01"> Cart </a>
          </div>
          <div className='FBox02'>
            <a href="#" className="FBoxtext02"> Ongoing </a>
          </div>
          <div className='FBox03'>
             <a href="#" className="FBoxtext03"> Completed </a>
          </div>
        </div>
      </div>
      <div className='OrderSecondSection'>
        <Box className='OrderBox1' >
          <img src={Or1} alt="Order" className='OrderImage' />
          <h4 className='OderBoxh4' >Your cart is empty</h4>
          <a href="#" className="OrderButton"> Add items to  cart </a>
        </Box>

      </div>

    </div>
  )
}

export default Order