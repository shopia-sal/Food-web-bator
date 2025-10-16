import React, { useEffect, useState } from 'react'
import { useCart } from '../../CartContext/CartContext'
import { dummyMenuData } from '../../assets/OmhDD'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './OurHomeMenu.css'
import axios from 'axios'

const categories = ['Sarapan', 'MakanSiang', 'MakanMalam', 'Desserts', 'Drinks']

const OurHomeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart()
  const [menuData, setMenuData] = useState({})

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/items')
      .then((res) => {
        const grouped = res.data.reduce((acc, item) => {
          acc[item.category] = acc[item.category] || []
          acc[item.category].push(item)
          return acc
        }, {})
        setMenuData(grouped)
      })
      .catch(console.error)
  }, [])

  const getCartEntry = (id) => cartItems.find((ci) => ci.item._id === id)
  const getQuantity = (id) => getCartEntry(id)?.quantity || 0
  const displayItems = (menuData[activeCategory] || []).slice(0, 4)

  return (
    <div className="menu-section relative min-h-screen bg-gradient-to-b from-[#1a120b] via-[#2d1c10] to-[#3e2b1d] text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,200,120,0.3),_transparent_60%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-cinzel text-amber-100 mb-14">
          <span className="font-dancingscript block text-6xl text-amber-200 mb-2">
            Menu Istimewa Kami
          </span>
          <span className="block text-2xl font-light tracking-wide text-amber-100/80">
            Harmoni Rasa dalam Setiap Sajian
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-btn ${
                activeCategory === cat
                  ? 'active-category'
                  : 'inactive-category'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {displayItems.map((item, i) => {
            const qty = getQuantity(item._id)
            const cartEntry = getCartEntry(item._id)
            return (
              <div
  key={item._id}
  className="relative flex flex-col items-center text-center bg-[#1E1916] border border-[#9b7b1d]/40 rounded-2xl shadow-[0_6px_12px_rgba(0,0,0,0.4)] p-6 transition-transform hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(155,123,29,0.4)]"
  style={{
    width: '260px',
    minHeight: '280px', // 🔥 ini bikin semua card tingginya sama
    margin: 'auto',
  }}
>
  {/* Gambar bulat di atas */}
  <div
    className="absolute -top-14 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-b from-[#C79A2B] to-[#B38600] p-[3px]"
  >
    <div className="rounded-full bg-[#1E1916] w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-[100px] h-[100px] object-cover rounded-full"
      />
    </div>
  </div>

  {/* Konten card */}
  <div className="mt-16 flex flex-col flex-grow justify-between w-full">
    <div>
      <h3 className="text-xl font-bold text-white font-cinzel">
        {item.name.split(' ')[0]}{' '}
        <span className="text-[#C79A2B]">
          {item.name.split(' ')[1] || ''}
        </span>
      </h3>

      <p className="text-sm text-[#d6c3a3] font-light mt-2 leading-relaxed line-clamp-3">
        {item.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      </p>
    </div>

    {/* Harga dan tombol tambah */}
    <div className="mt-6 flex items-center justify-between w-full px-4">
      <span className="text-[#EACB6B] font-semibold font-cinzel">
        Rp {Number(item.price).toLocaleString('id-ID')}
      </span>

      {getQuantity(item._id) > 0 ? (
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              getQuantity(item._id) > 1
                ? updateQuantity(getCartEntry(item._id)._id, getQuantity(item._id) - 1)
                : removeFromCart(getCartEntry(item._id)._id)
            }
            className="w-7 h-7 rounded-full bg-[#C79A2B] flex items-center justify-center text-black font-bold"
          >
            <FaMinus size={10} />
          </button>
          <span className="text-white font-semibold">{getQuantity(item._id)}</span>
          <button
            onClick={() =>
              updateQuantity(getCartEntry(item._id)._id, getQuantity(item._id) + 1)
            }
            className="w-7 h-7 rounded-full bg-[#C79A2B] flex items-center justify-center text-black font-bold"
          >
            <FaPlus size={10} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(item, 1)}
          className="bg-[#C79A2B] text-black font-semibold py-1 px-4 rounded-full flex items-center gap-1 hover:bg-[#b38600] transition"
        >
          <FaPlus size={12} /> Add
        </button>
      )}
    </div>
  </div>
</div>
            )
          })}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            className="explore-btn"
            to="/menu"
          >
            EXPLORE FULL MENU
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurHomeMenu
