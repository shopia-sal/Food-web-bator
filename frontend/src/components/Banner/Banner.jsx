import React, { useState } from 'react'
import { FaDownload, FaPlay, FaSearch, FaTimes } from "react-icons/fa";
import {bannerAssets} from '../../assets/dummydata';
import bgBanner from '../../assets/bg-banner.jpeg'

const Banner = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showVideo, setShowVideo] = useState(false);

    const {bannerImage, orbitImages, video} = bannerAssets

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    }

  return (
    <div className="relative w-full">
        {/* Background blur foto makanan */}
        <div className="relative w-full h-[90vh] bg-cover bg-center" 
            style={{ backgroundImage: `url(${bgBanner})` }}>
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
                
                {/* LEFT TEXT */}
                <div className="flex-1 text-center md:text-left text-white space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
  Kami Siap untuk <br/>
  <span className="bg-gradient-to-br from-[#FFFFFF] via-[#FFF1A4] to-[#D9B701] bg-clip-text text-transparent">
    Makanan & Delivery
  </span>
</h1>

                    <p className="text-lg sm:text-xl text-[#FFF2C0] max-w-lg mx-auto md:mx-0">
                        Dimasak oleh koki terbaik, diantar oleh kurir terpercaya. 
                        Hidangan hangat penuh rasa siap dinikmati.
                    </p>

{/* SEARCH */}
<form onSubmit={handleSearch} 
      className="flex items-center bg-[#000000]/60 border-2 border-[#FFAE00] rounded-[18px] overflow-hidden shadow-lg max-w-md mx-auto md:mx-0 px-2.5">
    
    <FaSearch className="text-[#FFC506] text-lg mr-4" />

    <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari makan & minuman..."
        className="flex-1 py-3 pr-2 text-white placeholder-[#FFC506] bg-transparent outline-none"
    />
    
    <button type="submit" 
        className="ml-2 bg-yellow-500 px-6 py-2 rounded-[10px] text-white font-semibold hover:bg-yellow-400 transition">
        Search
    </button>
</form>


                    {/* BUTTONS */}
                    <div className="flex gap-4 justify-center md:justify-start">
                        <button className="flex items-center gap-2 bg-[#0000008f] px-5 py-3 rounded-lg border-2 border-[#A77101] hover:bg-gray-800 transition">
                            <FaDownload className="text-yellow-400" />
                            <span>Download App</span>
                        </button>
                        <button onClick={() => setShowVideo(true)} 
                            className="flex items-center gap-2 bg-[#A77101] px-5 py-3 rounded-lg text-white font-semibold hover:bg-[#916205] transition">
                            <FaPlay />
                            <span>Watch video</span>
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGES */}
{/* RIGHT IMAGES */}
<div className="hidden md:flex flex-1 relative items-center justify-center mt-10 md:mt-0">
<div className="relative w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
    <img src={bannerImage} alt="banner" className="w-full h-full object-cover object-center" />
</div>


    {/* Orbit images */}
    {orbitImages.map((imgSrc, index) => (
        <div key={index} className={`absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl
        ${index === 0 ? "top-0 right-12" : index === 1 ? "bottom-0 left-8" : "top-1/2 -left-10"}`}>
            <img src={imgSrc} alt={`orbit-${index}`} className="w-full h-full object-cover"/>
        </div>
    ))}
</div>

            </div>
        </div>

        {/* VIDEO MODAL */}
        {showVideo && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/90 backdrop-blur-lg p-4 ">
                <button onClick={() => setShowVideo(false)}
                    className='absolute top-6 right-6 text-yellow-400 hover:text-yellow-300 text-3xl z-10 transition-all'>
                    <FaTimes/>
                </button>

                <div className="w-full max-w-4xl mx-auto">
                    <video
                    controls autoPlay className='w-full aspect-video object-contain rounded-lg shadow-2xl'>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
            </div>
        )}
    </div>
  )
}

export default Banner
