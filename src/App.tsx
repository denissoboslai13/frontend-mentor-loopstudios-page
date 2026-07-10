import './App.css'
import mobileHero from '../images/mobile/image-hero.jpg'
import desktopHero from '../images/desktop/image-hero.jpg'
import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import mobileVr from '../images/mobile/image-interactive.jpg'
import mobileEarth from '../images/mobile/image-deep-earth.jpg'
import desktopEarth from '../images/desktop/image-deep-earth.jpg'
import mobileArcade from '../images/mobile/image-night-arcade.jpg'
import desktopArcade from '../images/desktop/image-night-arcade.jpg'
import mobileFootball from '../images/mobile/image-soccer-team.jpg'
import desktopFootball from '../images/desktop/image-soccer-team.jpg'
import mobileGrid from '../images/mobile/image-grid.jpg'
import desktopGrid from '../images/desktop/image-grid.jpg'
import mobileAbove from '../images/mobile/image-from-above.jpg'
import desktopAbove from '../images/desktop/image-from-above.jpg'
import mobileBorealis from '../images/mobile/image-pocket-borealis.jpg'
import desktopBorealis from '../images/desktop/image-pocket-borealis.jpg'
import mobileCuriosity from '../images/mobile/image-curiosity.jpg'
import desktopCuriosity from '../images/desktop/image-curiosity.jpg'
import mobileFisheye from '../images/mobile/image-fisheye.jpg'
import desktopFisheye from '../images/desktop/image-fisheye.jpg'

import fbIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import pinterestIcon from '../images/icon-pinterest.svg'
import igIcon from '../images/icon-instagram.svg'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'


const mobileImages = [mobileEarth, mobileArcade, mobileFootball,
                      mobileGrid, mobileAbove, mobileBorealis, mobileCuriosity,
                      mobileFisheye]

const desktopImages = [desktopEarth, desktopArcade, desktopFootball,
                      desktopGrid, desktopAbove, desktopBorealis, desktopCuriosity,
                      desktopFisheye]

const imageText = ['DEEP EARTH', 'NIGHT ARCADE', 'SOCCER TEAM VR', 'THE GRID', 'FROM UP ABOVE VR', 'POCKET BOREALIS', 'THE CURIOSITY', 'MAKE IT FISHEYE']

const footerText = ['About', 'Careers', 'Events', 'Products', 'Support']

const HeroPart = ({ setSidebar, isMobile, isDesktop }) => {
  return (
    <div className='relative'>
      {isDesktop && (
        <img src={desktopHero} alt="" className='object-cover w-full md:h-80 lg:h-90 xl:h-120' />
      )}
      {isMobile && (
        <img src={mobileHero}></img>
      )}
      <div className='absolute top-0 flex flex-row items-center justify-between w-full py-10 px-7 md:p-8 xl:p-10 md:px-10 lg:px-16 xl:px-20'>
        <div>
          <img src={logo} alt="" className='w-35 md:w-40 lg:w-50 xl:w-65'/>
        </div>
        {isMobile && (
          <div onClick={() => setSidebar(p => p == false ? true : false)}>
            <img src={menu} alt="" />
          </div>
        )}
        {isDesktop && (
          <div className='flex flex-row text-white md:gap-6 lg:gap-10 md:text-md lg:text-[1.2rem]'>
            {footerText.map(txt => (
              <div className='flex flex-col gap-1 group hover:cursor-pointer'>
                <p>{txt}</p>
                <div className='border-2 border-b border-white group-hover:opacity-100 opacity-0 transition'></div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='px-7 font-["Josefin_Sans"] absolute top-[34%] md:top-[32%] lg:top-[34%] xl:top-[28%] md:left-6 lg:left-10 xl:left-20 w-full text-left text-white md:pr-[52%] lg:pr-[60%] xl:pr-[60%]'>
        <h1 className='border border-2 p-5 xl:p-10 text-[2.5rem] sm:text-[3rem] md:text-[2.5rem] lg:text-[2.8rem] xl:text-[3.8rem] leading-none font-extralight'>
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </div>
  )
}

const MiddlePart = ({ isMobile, isDesktop }) => {
  return (
    <div className='bg-white flex flex-col p-6 md:p-16 lg:p-22 xl:p-28 items-center pt-20 md:relative'>
      <div className='flex flex-col gap-5 text-center items-center md:text-left'>
        <div className='md:absolute md:top-16 lg:top-20 xl:top-28 md:left-16 lg:left-22 xl:left-32 md:w-100 lg:w-140 xl:w-180'>
          <img src={mobileVr} alt="" className='object-cover'/>
        </div>
        <div className='md:absolute md:bg-white md:top-48 lg:top-65 xl:top-70 md:right-14 lg:right-18 xl:right-30 md:left-[45%] lg:left-[45%] xl:left-[47%] md:p-10 lg:p-12 xl:p-16'>
          <p className='font-["Josefin_Sans"] mt-8 xl:mt-0 xl:p-0 text-[2rem] md:text-[2.1rem] lg:text-[3rem] xl:text-[3.3rem] leading-none font-light mb-6'>
            THE LEADER IN INTERACTIVE VR
          </p> 
          <p className='font-[Alata] text-[#868686] xl:px-5 md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] xl:px-0 xl:mt-6'>
            Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-8 text-center md:mt-115 lg:mt-140 xl:mt-140 w-full'>
        <div className='mt-12 lg:mb-6 xl:mb-8 mb-4 flex flex-row items-center justify-center md:justify-between'>
          <p className='font-["Josefin_Sans"] text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] leading-none font-light'>
            OUR CREATIONS
          </p>
          {isDesktop && (
            <button className='font-[Alata] text-[1.2rem] leading-none border-[0.1rem] p-3 px-9 flex justify-center tracking-[0.2rem] hover:bg-black hover:text-white hover:cursor-pointer transition'>SEE ALL</button>
          )}
        </div>
        <div className='flex flex-col gap-6 items-center md:grid md:grid-cols-4 md:gap-8'>
          {isMobile && (
            <>
              {mobileImages.map((image, index) => (
                <div className='relative group hover:cursor-pointer'>
                  <img src={image} alt="" className='linear'/>
                  <div className='bg-gradient-to-r from-black to-transparent absolute inset-0 opacity-70 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition group-hover:opacity-33'></div>
                  <p className='absolute bottom-0 left-0 right-35 text-left font-["Josefin_Sans"] text-[1.5rem] leading-none font-light text-white p-6 group-hover:text-black transition'>{imageText[index]}</p>
                </div>
              ))}
            </>
          )}
          {isDesktop && (
            <>
              {desktopImages.map((image, index) => (
                <div className='relative group hover:cursor-pointer'>
                  <img src={image} alt="" className='object-fill w-full'/>
                  <div className='bg-gradient-to-t from-black to-transparent absolute inset-0 opacity-70 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition group-hover:opacity-33'></div>
                  <p className='absolute bottom-0 left-0 md:right-2 xl:right-5 text-left font-["Josefin_Sans"] md:text-[1.1rem] lg:text-[1.6rem] xl:text-[2rem] leading-none font-light text-white md:p-4 lg:p-6 xl:p-9 group-hover:text-black transition'>{imageText[index]}</p>
                </div>
              ))}  
            </>
          )}
          {isMobile && (
            <button className='mt-4 mb-12 font-[Alata] text-[1.2rem] leading-none border-[0.1rem] p-3 px-9 flex justify-center tracking-[0.2rem] hover:bg-black hover:text-white hover:cursor-pointer transition'>SEE ALL</button>  
          )}
        </div>
      </div>
    </div>
  )
}

const Footer = ({ isMobile, isDesktop }) => {
  return (
    <div className='pb-10 md:pb-0 bg-black flex flex-col items-center pt-10 text-white flex flex-col gap-4 font-[Alata] md:px-18 lg:px-30 xl:px-40'>
      <div className='flex flex-row md:justify-between justify-center items-center w-full'>
        <img src={logo} alt="" className='w-40 mb-4'/>
        {isDesktop && (
          <div className='flex flex-row items-center justify-center gap-5'>
            <div className='flex flex-col gap-2 group hover:cursor-pointer'>
              <img src={fbIcon} alt="" />
              <div className='border-2 border-b border-white group-hover:opacity-100 opacity-0 transition'></div>
            </div>
            <div className='flex flex-col gap-2 group hover:cursor-pointer'>
              <img src={twitterIcon} alt="" />
              <div className='border-2 border-b border-white group-hover:opacity-100 opacity-0 transition'></div>
            </div>
            <div className='flex flex-col gap-2 group hover:cursor-pointer'>
              <img src={pinterestIcon} alt="" />
              <div className='border-2 border-b border-white group-hover:opacity-100 opacity-0 transition'></div>
            </div>
            <div className='flex flex-col gap-2 group hover:cursor-pointer'>
              <img src={igIcon} alt="" />
              <div className='border-2 border-b border-white group-hover:opacity-100 opacity-0 transition'></div>
            </div>
          </div>
        )}
        
      </div>
      <div className='flex flex-col md:flex-row w-full items-center justify-between'>
        <div className='flex flex-col items-center gap-4 md:flex md:flex-row md:items-start md:gap-4 lg:gap-6'>
          {footerText.map(txt => (
            <div className='flex flex-col gap-1 group hover:cursor-pointer'>
              <p className='lg:text-base text-[0.9rem]'>{txt}</p>
              <div className='border-2 border-b border-white group-hover:opacity-100 opacity-0 transition'></div>
            </div>
          ))}
        </div>
        {isDesktop && (
          <div>
            <p className='text-[#868686] lg:text-base text-[0.9rem]'>© 2021 Loopstudios. All rights reserved.</p>
          </div>  
        )}
      </div>
      <div className='flex flex-col mt-6 gap-4'>
        {isMobile && (
          <>
            <div className='flex flex-row items-center justify-center gap-5'>
              <img src={fbIcon} alt="" />
              <img src={twitterIcon} alt="" />
              <img src={pinterestIcon} alt="" />
              <img src={igIcon} alt="" />
            </div>
            <div>
              <p className='text-[#868686]'>© 2021 Loopstudios. All rights reserved.</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const Sidebar = ({ setSidebar }) => {
  return (
    <motion.div className='bg-black fixed inset-0 z-99 flex flex-col p-6 py-10'
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
      <div className='flex flex-row justify-between items-center'>
        <img src={logo} alt="" className='w-40'/>
        <button onClick={() => setSidebar(p => p == false ? true : false)}>
          <img src={close} alt="" className='w-6 h-6' />
        </button>
      </div>
      <div className='font-["Josefin_Sans"] text-white font-extralight mt-30 text-3xl flex flex-col gap-4'>
        <p>ABOUT</p>
        <p>CAREERS</p>
        <p>EVENTS</p>
        <p>PRODUCTS</p>
        <p>SUPPORT</p>
      </div>
    </motion.div>
  )
}

function App() {
  const [sidebar, setSidebar] = useState(false)
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className='min-w-[375px] w-full relative overflow-x-hidden'>
      <AnimatePresence>
        {sidebar && (
          <Sidebar setSidebar={setSidebar} />
        )}
      </AnimatePresence>
      <HeroPart setSidebar={setSidebar} isDesktop={isDesktop} isMobile={isMobile} />
      <MiddlePart isMobile={isMobile} isDesktop={isDesktop}/>
      <Footer isMobile={isMobile} isDesktop={isDesktop}/>
    </div>
  )
}

export default App
