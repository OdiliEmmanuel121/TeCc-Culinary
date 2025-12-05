import './Home.css'
import Box from '@mui/material/Box';
// import { Restaurant } from '@mui/icons-material';
// import LocalBarIcon from '@mui/icons-material/LocalBar';
import StoreIcon from '@mui/icons-material/Store';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import whiterice from '../../../assets/whiterice.png'
import amala from '../../../assets/amala.png'
import semo from '../../../assets/semo.png'
import amalaa from '../../../assets/amalaa.png'
import restu from '../../../assets/restu.png'
import bar from '../../../assets/bar.png'
import superma from '../../../assets/superma.png'
import pharm from '../../../assets/pharm.png'
import Polygon1 from '../../../assets/Polygon1.png'


const Home = () => {
    return (
        <div className='HomeContainer'>
            <div className='FirstSection'>
                <input type="Search" placeholder='8, Modupe close, Mubarak bustop, Akute  items' className='searcheng' />
                <a href="#" className="button"> Submit </a>
                <p> Hello Toyin </p>
            </div>
            <div className='SecondSetion'>
                <Box className='Box01' >
                    {/* <Restaurant /> */}
                    <img src={restu} alt="restu" className='icon1'/>
                    <h3 className='h3secondSection1'>Resturants</h3>
                </Box>
                <Box className='Box02' >
                    {/* <LocalBarIcon /> */}
                    <img src={bar} alt="bar" className='icon2'/>
                    <h3 className='h3secondSection2' >Bar</h3>
                </Box>
                <Box className='Box03'>
                    {/* <StoreIcon /> */}
                    <img src={superma} alt="superma" className='icon3'/>
                    <h3 className='h3secondSection3'>Supermarket</h3>
                </Box>
                <Box className='Box04'>
                    {/* <LocalHospitalIcon /> */}
                    <img src={pharm} alt="pharm" className='icon4'/>
                    <h3 className='h3secondSection4'>Pharmarcy</h3>
                </Box>
            </div>

            <div className='thirdSection'>
                <Box className='Box05'>
                    <h3 className='h3thirdSection'>Enjoy  1 month free delievery and reduce fees with TeCc food when you refer</h3>
                </Box>
                <img src={Polygon1} alt="Polygon1" className='polyGon'/>
            </div>

            <div>
                <Box className='BoxSection' sx={{ py: 3 }}>
                    <div className='cardBox'>
                        <div className="card1">
                            <img src={whiterice} alt="Beans and Plantain" className="card-image1" />
                            <div className="card-content1">
                                <h3>El-shadai kitchen</h3>
                            </div>
                        </div>
                    </div>
                     <div className='cardBox'>
                        <div className="card1">
                            <img src={amala} alt="Beans and Plantain" className="card-image2" />
                            <div className="card-content1">
                                <h3>CrossVent-Bode </h3>
                            </div>
                        </div>
                    </div>
                     <div className='cardBox'>
                        <div className="card1">
                            <img src={semo} alt="Beans and Plantain" className="card-image3" />
                            <div className="card-content1">
                                <h3>Ify's kitchen</h3>
                            </div>
                        </div>
                    </div>
                     <div className='cardBox'>
                        <div className="card1">
                            <img src={amalaa} alt="Beans and Plantain" className="card-image4" />
                            <div className="card-content1">
                                <h3>Amala Hay-Olori</h3>
                            </div>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Home