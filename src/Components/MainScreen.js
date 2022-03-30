import React from 'react';
import './MainScreen.css';
import logo from '../Assets/logo.png';
import logos from '../Assets/logo2.png';
import { AiOutlineHome } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Grid, GridItem } from 'react-masonry-grid';
import fish from '../Assets/fish.mp4';
import left from '../Assets/left.png';
import right from '../Assets/right.png';
import ParticlesBg from 'particles-bg';

const DATA = [
    {

        title: 'Menu',
    },
    {
        title: 'Gallery',
    },
    {
        title: 'Directions'
    },
    {
        title: 'Contact'
    },
    {
        title: 'About'
    },
]
const images = [
    'https://www.theartofwings.com/img/1.7d3de1b8.jpg',
    ' https://www.theartofwings.com/img/2.a693ff2f.jpg',
    'https://www.theartofwings.com/img/3.51bb855d.jpg',
    '  https://www.theartofwings.com/img/4.c7f48e27.jpg',
    ' https://www.theartofwings.com/img/5.fa27e67e.jpg',
    '  https://www.theartofwings.com/img/6.278566a3.jpg',
    ' https://www.theartofwings.com/img/7.120341f7.jpg',
    ' https://www.theartofwings.com/img/8.5a470325.jpg',
    '  https://www.theartofwings.com/img/9.d98bf685.jpg',
    ' https://www.theartofwings.com/img/11.a96930a6.jpg',
    'https://www.theartofwings.com/img/12.3f5d47a3.jpg',
    ' https://www.theartofwings.com/img/8.5a470325.jpg',
    '  https://www.theartofwings.com/img/9.d98bf685.jpg',
    ' https://www.theartofwings.com/img/11.a96930a6.jpg',
    '  https://www.theartofwings.com/img/6.278566a3.jpg',
    ' https://www.theartofwings.com/img/7.120341f7.jpg',

]
const MainScreen = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='logoView'>
                    <img src={logo} className='logo'></img>
                    <text className='headerText'>WINGS.BURGERS.FRIES</text>
                </div>
                <div className='iconText'>
                    <AiOutlineHome size={25} color='white' />
                    <div className='headerList'>

                        {
                            DATA.map((Element) => {
                                return (
                                    <div className='menu'>
                                        <text className='text' >{Element.title}</text>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='Right'>
                    <div className='facebook'>
                        <FaFacebookF size={35} color='white' style={{ marginRight: '10%' }} />
                        <FaInstagram size={40} color='white' style={{ marginRight: '15%' }} />
                        <FaYoutube size={40} color='white' />
                    </div>
                    <div className='two'>
                        <div className='phone'>
                            <FaPhoneAlt size={20} />
                        </div>
                        <div className='button'>Order Now</div>
                    </div>
                </div>
            </div>
            <div className='MainView'>
                <div className='grid'>
                    <img src={logo} className='logo1'></img>

                    <Grid gutter={6} columnWidth={200} rowHeight={10}>
                        {images.map((image) => (
                            <GridItem>
                                <img src={image} style={{ width: '100%' }} />
                            </GridItem>
                        ))}
                    </Grid>
                </div>
                <div className='background'>
                    <div className='move'>
                        <div className='leftRight'>
                            <button className='btnleft'>
                                <img src={left} className='imgleft'></img>
                            </button>
                            <div>
                                <text className='textcob' >Combos</text>
                                <text className='textand' > & </text>
                                <text className='textcob' >Deals</text>
                            </div>
                            <button className='btnright'>
                                <img src={right} className='imgleft'></img>

                            </button>

                        </div>
                    </div>
                    <video className='video' loop autoPlay muted>
                        <source
                            src={fish}
                            type="video/mp4"
                        />
                    </video>
                    {/* <ParticlesBg type="circle" bg={true} /> */}
                </div>

            </div>


        </div>

    );
}
export default MainScreen;
