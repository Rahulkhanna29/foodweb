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
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import food1 from '../Assets/food1.jpg';
import food2 from '../Assets/food2.jpeg';
import food3 from '../Assets/food3.jpg';
import bubble from '../Assets/bubble.png';
import ph1 from '../Assets/ph1.png';
import ph2 from '../Assets/ph2.png';
import ph3 from '../Assets/ph3.png';
import ph4 from '../Assets/ph4.png';
import ph5 from '../Assets/ph5.png';
import rg1 from '../Assets/rg1.png';
import rg2 from '../Assets/rg2.png';
import rg3 from '../Assets/rg3.png';
import rg4 from '../Assets/rg4.png';
import ReactPlayer from 'react-player';
import {RangeStepInput} from 'react-range-step-input'; 


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
                   <div className='swipe'>
                   <Swiper className='swipe1'
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={SwiperSlide}>
      <SwiperSlide className='slide'>
          <div className='view'>
      <img src={food1} className='image'></img>
     <text className='textslide' >Sliders + Art Appetizer</text>
     <text className='textslide1' >$8.49 - $14.99</text>
     <p className='textslide2' >Your choice of sliders with any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)</p>
     <button className='button1'>Check it Out</button>

      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='view'>
      <img src={food2} className='image'></img>
     <text className='textslide' >Sliders + Art Appetizer</text>
     <text className='textslide1' >$8.49 - $14.99</text>
     <p className='textslide2' >Your choice of sliders with any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)</p>
     <button className='button1'>Check it Out</button>

      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='view'>
      <img src={food3} className='image'></img>
     <text className='textslide' >Sliders + Art Appetizer</text>
     <text className='textslide1' >$8.49 - $14.99</text>
     <p className='textslide2' >Your choice of sliders with any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)</p>
     <button className='button1'>Check it Out</button>

      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='view'>
      <img src={food2} className='image'></img>
     <text className='textslide' >Sliders + Art Appetizer</text>
     <text className='textslide1' >$8.49 - $14.99</text>
     <p className='textslide2' >Your choice of sliders with any art appetizers (except for Quesadilla, Chicken Quesadilla, & Beef Quesadilla)</p>
     <button className='button1'>Check it Out</button>

      </div>
      </SwiperSlide>
    </Swiper>
                   </div>
                    </div>
                    <video className='video' loop autoPlay muted>
                        <source
                            src={fish}
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className='background1'>
            <div className='move'>
            <div className='leftRight1'>
             <div className='SeeWhat'>
                 <text className='SeeText'>See What Others are Saying About Us!</text>
                <div className='red'>
                 <button className='btnleft1'>
                                <img src={left} className='imgleft'></img>
                            </button>
                            <button className='btnright1'>
                                <img src={right} className='imgleft'></img>
                                 </button>
                                 </div>
                               </div>
                               <img src={bubble} className='bubbimg'></img>
              </div>  
              <div className='bubbSwipe'>
<div className='bubbleftside'>
<Swiper 
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={SwiperSlide}>
      <SwiperSlide >
          <div className='viewbubb'>
      <img src={ph1}></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={ph2}></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={ph3}></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={ph4}></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={ph5}></img>
      </div>
      </SwiperSlide>
    </Swiper>
</div>
<div className='bubbrightside'>
    <div className='row'>
<div className='bubbrg'>
   
        <img src={rg1} className='buubrgg'></img>
        <img src={rg2} className='buubrgg'></img>
   
    </div>
    <div className='bubbrg'>
    <img src={rg3} className='buubrgg'></img>
        <img src={rg4} className='buubrgg'></img>
    </div>
</div>
</div>
              </div>
            
</div>
</div>
{/* <div className='background2'> */}
{/* <video width='820px'
height='40px'
 loop autoPlay muted>
//  box appbar toolbar
                        <source
                            src={fish}
                            type="video/mp4"
                        />
                    </video> */}
                    {/* <ReactPlayer
                     width={500}
                     height={50}
                    url={fish} /> */}
                     <ReactPlayer
      playing={true}
      controls={true}
      loop={true}
      allow='autoplay; encrypted-media'
        allowFullScreen
        // url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        url={fish}
        width='100%'
        height='500px'
        
        // type="video/mp4"
      />
            {/* </div> */}
            
<div className='background3'>           
 <div className='bubbSwipe1'>
<div className='bubbleftside1'>
<Swiper 
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={SwiperSlide}>
      <SwiperSlide >
          <div className='viewbubb'>
      <img src={food1}  className='image1'></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={food2}  className='image1'></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={food3}  className='image1'></img>
      </div>
      </SwiperSlide>
      <SwiperSlide className='slide'>
          <div className='viewbubb'>
      <img src={food2}  className='image1'></img>
      </div>
      </SwiperSlide>
    </Swiper>
</div>
<div className='bubbleftside1'>
<div className='sell'>
<text className='textslide3' >Our Flavors</text>
<div className='sell1'>

<img style={{ backgroundColor:'green'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABpUlEQVRIie2VK0gEQQCG//UBcp4iiPgIahBsJkFBgyCXL4hg1SZYTQa5ZrZcNggG8VE0aBDBcFxUxKKiQTH4Ap8gfoZbcV1n7nbk7oL4l4V///m/mdndWelfBQTsARkgXk5oLV9aKie4n++aLBc4HQLfA22lhjYBj/zUYqnBCwbop/pKBU0A73nAq6WANgBneaAAb0CLS29FhExaUnuBTKWkUX+iHrAF7ABR+n8KSBZYaVDL/pjBgJf4DTQOXDqAj/1xmwHP/Y0HZh2gAA9AKuTdAtUu0Bi5w6EYGjIxbA8/KaneeZvMGnABjxQJKknGw8UG7s1TdClpwgHc7QJutvjXym3dhQO41WRWWcLPkmoMfsrzvFOgzgFsXJxtxScWf82/7kvKRgRfuYA3LP6NJHmeh6RxSXcRwAcRMjkBHcCL4ZvsC+UG/YMjn6Yig/3SGUNJ2pAbBp4t0Eeg0RVcBayHil6BHkN2zAKec4IGCmuAlVDZEdBkyIZzh0DsV2C/0AOmgadAacaQGwrcPwcK/cMjT6ATmAcugF3LBLeBLNBVFOif0geONyOzeoy6XQAAAABJRU5ErkJggg==" ></img>

<RangeStepInput  min={0} max={100} />
<img style={{ backgroundColor:'red'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABpUlEQVRIie2VK0gEQQCG//UBcp4iiPgIahBsJkFBgyCXL4hg1SZYTQa5ZrZcNggG8VE0aBDBcFxUxKKiQTH4Ap8gfoZbcV1n7nbk7oL4l4V///m/mdndWelfBQTsARkgXk5oLV9aKie4n++aLBc4HQLfA22lhjYBj/zUYqnBCwbop/pKBU0A73nAq6WANgBneaAAb0CLS29FhExaUnuBTKWkUX+iHrAF7ABR+n8KSBZYaVDL/pjBgJf4DTQOXDqAj/1xmwHP/Y0HZh2gAA9AKuTdAtUu0Bi5w6EYGjIxbA8/KaneeZvMGnABjxQJKknGw8UG7s1TdClpwgHc7QJutvjXym3dhQO41WRWWcLPkmoMfsrzvFOgzgFsXJxtxScWf82/7kvKRgRfuYA3LP6NJHmeh6RxSXcRwAcRMjkBHcCL4ZvsC+UG/YMjn6Yig/3SGUNJ2pAbBp4t0Eeg0RVcBayHil6BHkN2zAKec4IGCmuAlVDZEdBkyIZzh0DsV2C/0AOmgadAacaQGwrcPwcK/cMjT6ATmAcugF3LBLeBLNBVFOif0geONyOzeoy6XQAAAABJRU5ErkJggg==" ></img>


</div>
</div>
</div>
<div className='bubbleftside1'>
<div className='sell'>
<text className='textslide3' >Best Sellers</text>

<div className='sell1'>
<p className='textslide2' >6 Piece Wings</p>
<p className='textslide2' >$7.99</p>

</div>
<div className='sell1'>
<p className='textslide2' >6 Piece Wings</p>
<p className='textslide2' >$7.99</p>

</div>
<div className='sell1'>
<p className='textslide2' >6 Piece Wings</p>
<p className='textslide2' >$7.99</p>

</div>
<div className='sell1'>
<p className='textslide2' >6 Piece Wings</p>
<p className='textslide2' >$7.99</p>

</div>
</div>
</div>
    </div>
</div>
            </div>


        </div>

    );
}
export default MainScreen;
