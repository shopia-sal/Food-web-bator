import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FiArrowRight, FiMail, FiMapPin, FiMessageSquare, FiPhone } from 'react-icons/fi'
import { contactFormFields } from '../../assets/dummydata'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', address: '', dish: '', query: ''
  })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Pesan kamu berhasil dikirim!', {
      style: {
        border: '2px solid #f5c400',
        padding: '16px',
        color: '#fff',
        background: '#000000cc',
        backdropFilter: 'blur(10px)',
      },
      iconTheme: { primary: '#f5c400', secondary: '#000' },
    })
    setFormData({ name: '', phone: '', email: '', address: '', dish: '', query: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-amber-950
     text-white font-[Poppins] px-6 py-16 relative overflow-hidden">

      <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 4000 }} />

      {/* glowing orbs background */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-ping"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-center text-5xl md:text-6xl font-bold mb-14 bg-clip-text text-transparent 
         bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 animate-fade-in-down">
          Hubungi Kami
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT - Contact Info */}
          <div className="space-y-6">
            {[
              { icon: <FiMapPin />, title: 'Alamat Kami', text: 'Hapesong Baru, Batang Toru', color: 'from-amber-500/20' },
              { icon: <FiPhone />, title: 'Nomor Telepon', text: '+62 812 3456 7890', color: 'from-yellow-500/20' },
              { icon: <FiMail />, title: 'Email Kami', text: 'batorArtomoro@gmail.com', color: 'from-orange-500/20' }
            ].map((item, i) => (
              <div key={i}
                className="relative bg-white/5 border border-amber-400/30 rounded-2xl p-6 backdrop-blur-md 
                hover:scale-[1.02] transition-transform duration-300 hover:border-amber-300 group shadow-xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} to-transparent opacity-0
                 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                <div className="relative flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-600/30 to-amber-900/40 text-yellow-400
                   shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-300">{item.title}</h3>
                    <p className="text-amber-100/80">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - Contact Form */}
          <div className="relative bg-black/40 border border-amber-400/30 rounded-2xl p-8 shadow-2xl 
           backdrop-blur-md hover:border-amber-300/50 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactFormFields.map(({ label, name, type, placeholder, Icon }) => (
                <div key={name}>
                  <label className="block text-amber-200 text-sm mb-2">{label}</label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 text-xl">
                      <Icon />
                    </div>
                    <input
                      type={type}
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full bg-white/5 border border-amber-500/30 rounded-xl pl-10 pr-4 py-3 text-amber-50
                       focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-amber-200 text-sm mb-2">Pesan Kamu</label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-amber-400 text-xl">
                    <FiMessageSquare />
                  </div>
                  <textarea
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    placeholder="Ketik pesanmu di sini..."
                    rows="4"
                    className="w-full bg-white/5 border border-amber-500/30 rounded-xl pl-10 pr-4 py-3 text-amber-50
                     focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <button type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 via-amber-500 to-orange-600 
                 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold py-3 rounded-xl
                 shadow-md shadow-amber-500/30 hover:shadow-amber-400/40 transition-all duration-300
                 flex items-center justify-center space-x-2 group">
                <span>Kirim Pesan</span>
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
