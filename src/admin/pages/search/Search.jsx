import { SearchSharp } from '@mui/icons-material'
import './Search.css'
import SMO from '../../../assets/SMO.png'
import AM from '../../../assets/AM.png'
import JR from '../../../assets/JR.png'
import SM from '../../../assets/SM.png'
import Box from '@mui/material/Box';
import star from '../../../assets/Star.png'
import oe from '../../../assets/oe.png'
import or from '../../../assets/or.png'
import fs from '../../../assets/fs.png'
import br from '../../../assets/br.png'
import st from '../../../assets/st.png'
import jrj from '../../../assets/jr1.png'




const Search = () => {
    return (
        <div className='SearchContainer'>
            <div className='SeaFirstSection'>
                <h3> Hello Toyin </h3>
                <SearchSharp className='SearchIcon' />
                <input type="Search" placeholder=' Food, drinks, groceries .......etc' className='Seasearcheng' />
                <a href="#" className="Seabutton"> Submit </a>
            </div>

            <div className='SeaSecondSection'>
                <Box className='SeaBoxSection' sx={{ py: 3 }}>
                    <div className='SeacardBox'>
                        <div className="Seacard1">
                            <img src={SMO} alt="Beans and Plantain" className="Seacard-image1" />
                        </div>
                    </div>
                    <div className='SeacardBox'>
                        <div className="Seacard2">
                            <img src={AM} alt="Beans and Plantain" className="Seacard-image2" />
                        </div>
                    </div>
                    <div className='SeacardBox'>
                        <div className="Seacard3">
                            <img src={JR} alt="Beans and Plantain" className="Seacard-image3" />
                        </div>
                    </div>
                    <div className='SeacardBox'>
                        <div className="Seacard4">
                            <img src={SM} alt="Beans and Plantain" className="Seacard-image4" />
                        </div>
                    </div>
                </Box>

                <div className='SeaThirdSection'>
                    <Box className='SeaBoxSection' sx={{ py: 3 }}>
                        <div className='SeaCardbox2'>
                            <div className='Spread1'>
                                <img src={star} alt="Star" className='SpreadIon1' />
                                <h3>Jollof rice drevoxx</h3>
                                <img src={jrj} alt="jollof" className='SpreadImg1' />
                            </div>
                            <div className='Spread2'>
                                <img src={star} alt="Star" className='SpreadIon2' />
                                <h3>Eba and okra ro</h3>
                                <img src={oe} alt="Eba and okra" className='SpreadImg2' />
                            </div>
                            <div className='Spread3'>
                                <img src={star} alt="Star" className='SpreadIon3' />
                                <h3>Ofada rice dour</h3>
                                <img src={or} alt="Ofada rice" className='SpreadImg2' />
                            </div>
                        </div>
                        <div className='SeaCardbox3'>
                            <div className='Spread4'>
                                <img src={star} alt="Star" className='SpreadIon4' />
                                <h3>Stake meat Jaggo</h3>
                                <img src={st} alt="Stake meat" className='SpreadImg2' />
                            </div>
                            <div className='Spread5'>
                                <img src={star} alt="Star" className='SpreadIon5' />
                                <h3>Fisherman Soup</h3>
                                <img src={fs} alt="Fisherman Soup" className='SpreadImg2' />
                            </div>
                            <div className='Spread6'>
                                <img src={star} alt="Star" className='SpreadIon6' />
                                <h3>Basmati rice clo</h3>
                                <img src={br} alt="Basmati rice clon" className='SpreadImg2' />
                            </div>
                        </div>

                    </Box>
                </div>
            </div>

        </div>
    )
}

export default Search