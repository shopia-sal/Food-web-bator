import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../assets/dummydata';
import { FaFacebookF, FaInstagram, FaLeaf, FaLinkedinIn, FaSmile, FaUtensils } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const About = () => {
  const [hovered, setHovered] = useState(null);

  const values = [
    {
      id: 1,
      icon: <FaLeaf className="w-10 h-10 text-amber-400" />,
      title: "Bahan Segar Pilihan",
      desc: "Kami hanya menggunakan bahan lokal terbaik yang dipilih langsung dari petani dan nelayan terpercaya setiap hari."
    },
    {
      id: 2,
      icon: <FaUtensils className="w-10 h-10 text-amber-400" />,
      title: "Kreasi & Inovasi Rasa",
      desc: "Setiap menu kami lahir dari eksperimen dan cinta terhadap kuliner nusantara serta modern taste."
    },
    {
      id: 3,
      icon: <FaSmile className="w-10 h-10 text-amber-400" />,
      title: "Pelayanan dengan Hati",
      desc: "Kami percaya pengalaman makan terbaik tidak hanya dari rasa, tapi juga dari keramahan setiap interaksi."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3c2a21] to-[#1a120b] text-amber-50 overflow-hidden relative">

      {/* 1️⃣ STORY SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-4"
        >
          <h1 className="text-5xl sm:text-6xl font-cinzel font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-200 text-transparent bg-clip-text">
            Perjalanan Rasa Kami
          </h1>
          <p className="text-amber-100/90 text-lg sm:text-xl leading-relaxed font-cinzel">
            Sejak awal berdiri, <span className="text-amber-400">Ekspres Kuliner</span> hadir untuk menghadirkan kehangatan rumah dalam setiap hidangan.  
            Kami percaya, makanan bukan sekadar kebutuhan, melainkan cara untuk merayakan kehidupan.
          </p>
        </motion.div>
      </section>

      {/* 2️⃣ VALUES SECTION */}
      <section className="py-20 px-6 sm:px-10 bg-[#2b1d14]/80 backdrop-blur-md relative">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-cinzel font-bold text-amber-100 mb-4"
          >
            Nilai Kami
          </motion.h2>
          <p className="text-amber-100/80 max-w-2xl mx-auto font-cinzel">
            Kami berpegang pada tiga pilar utama yang membentuk karakter dan kualitas setiap hidangan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#3c2a21]/70 border border-amber-700/40 rounded-3xl p-8 shadow-lg hover:shadow-amber-600/30 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="mb-6">
                {v.icon}
              </motion.div>
              <h3 className="text-2xl font-cinzel text-amber-200 mb-3">{v.title}</h3>
              <p className="text-amber-100/80 text-sm font-cinzel">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3️⃣ TEAM SECTION */}
      <section className="py-20 px-6 sm:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-cinzel font-bold text-center mb-12 text-amber-100"
          >
            Di Balik Dapur Kami
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-[#3c2a21]/80 border border-amber-700/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-amber-600/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-amber-200 mb-1">{m.name}</h3>
                  <p className="text-amber-500 font-cinzel mb-3">{m.role}</p>
                  <p className="text-amber-100/80 text-sm font-cinzel mb-4">{m.bio}</p>
                  <div className="flex justify-center gap-3">
                    <FaXTwitter className="hover:text-amber-400 cursor-pointer" />
                    <FaInstagram className="hover:text-amber-400 cursor-pointer" />
                    <FaFacebookF className="hover:text-amber-400 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-amber-400 cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center text-amber-100/90 italic font-cinzel text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            “Setiap masakan kami adalah cerita — bukan sekadar hidangan.”  
            <br />
            <span className="text-amber-400">– Chef Utama Ekspres Kuliner</span>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
