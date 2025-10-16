import React from 'react'
import {aboutfeature } from "../../assets/dummydata"
import { FaInfoCircle } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import AboutImage from '../../assets/AboutImage.png'
import FloatingParticle from '../FloatingParticle/FloatingParticle'
import './AboutHome.css'
import RiderMain from "../../assets/RiderMain.jpg"   // gambar utama orang di motor
import RiderSmall from "../../assets/RiderSmall.jpg" // gambar kecil bulat bawah


const AboutHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0a0a] via-[#1a1212] to-[#2a1e1e] text-white
    py-10 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-20 w-96 h-96 bg-amber-400/20 rounded-full
        blur-3xl mix-blend-soft-light"/>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-600/15 rounded-full
            blur-3xl mix-blend-soft-light"/>
        </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:gap-8
            xl:gap-16 relative">
                <div className="w-full order-1 lg:order-2 space-y-8 sm:space-y-12 relative">
                    <div className="space-y-4 sm:space-y-8 px-4 sm:px-0">
<h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
  <span className="block text-sm sm:text-base md:text-lg text-amber-200/90 mb-2 tracking-wider"> 
    • About Us
  </span>
  <span className="block text-[40px] font-cinzel bg-gradient-to-r from-[#ffffff] via-[#f5e37d] to-[#847002] bg-clip-text text-transparent">
    Pesona Kuliner
  </span>
  <span className="block mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-light text-amber-100/80">
    Rasa yang Berpadu &amp; Kenangan yang Tumbuh
  </span>
</h2>

<p className="mt-4 italic text-amber-50/90 text-base sm:text-lg leading-relaxed border-l-4 border-amber-400 pl-4">
  "Dalam setiap racikan, kami satukan cinta dan ketepatan. Yang tersaji bukan hanya santapan, 
  melainkan kisah rasa yang tak mudah dilupakan."
</p>

                    </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 sm:px-0 mt-6">
  {aboutfeature.map((item,i) => (
    <div key={i} className="feature-card text-center">
      <div className={`p-4 mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br ${item.color}`}>
        <item.icon className="text-2xl text-white" />
      </div>
      <h3 className="text-sm font-cinzel mt-3 text-amber-100">{item.title}</h3>
      <p className="text-xs text-amber-100/70 mt-1">{item.text}</p>
    </div>
  ))}
</div>


                    <div className="flex flex-wrap gap-4 items-center mt-6 sm:mt-8 px-4 sm:px-8">
                       <Link to="/about" className="cta-btn">
  Buka Warisan Kita
</Link>

                    </div>
                </div>
<div className="relative flex justify-center items-center">
  {/* Gambar utama kapsul */}
  <div className="w-[320px] ml-8 h-[450px] rounded-full overflow-hidden border-4 border-[#C9C7B4] shadow-xl">
    <img 
      src={RiderMain} 
      alt="Delivery Rider" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Badge Experience di atas depan */}
  <div className="absolute -top-6 right-0 bg-[#C9C7B4] text-white font-semibold px-4 py-2 
                  rounded-lg shadow-lg text-center text-sm sm:text-base leading-tight z-20">
    3+ Years of <br/> Experience
  </div>

  {/* Gambar kecil bulat */}
  <div className="absolute -bottom-2 ml-2 -left-2 w-24 h-24 rounded-full overflow-hidden 
                  border-2 border-[#C9C7B4] shadow-md">
    <img 
      src={RiderSmall} 
      alt="Chef" 
      className="w-full h-full object-cover"
    />
  </div>
</div>


            </div>

            <FloatingParticle/>
        </div>
  )
}

export default AboutHome