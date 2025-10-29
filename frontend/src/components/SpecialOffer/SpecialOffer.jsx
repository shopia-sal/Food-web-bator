import React, { useEffect, useState } from 'react'
import { useCart } from '../../CartContext/CartContext';
import { FaFire, FaHeart, FaPlus, FaStar } from 'react-icons/fa';
import { HiMinus, HiPlus } from "react-icons/hi";
import axios from 'axios';

const SpecialOffer = () => {
  const [showAll, setShowAll] = useState(false);
  const [items, setItems] = useState([]);
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();

  const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-[#FF9000]" />); // full star
    } else if (rating >= i - 0.5) {
      stars.push(<FaStar key={i} className="text-yellow-400 opacity-50" />); // half star
    } else {
      stars.push(<FaStar key={i} className="text-gray-500" />); // empty star
    }
  }
  return stars;
};


  // fetch menu
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/items`)
      .then(res => setItems(res.data.items ?? res.data))
      .catch(err => console.error(err));
  }, [])

  const displayList = Array.isArray(items) ? items.slice(0, showAll ? 8 : 4) : [];

  return (
    <div className="bg-[#1a1212] text-white py-16 px-4 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#FFFFFF] via-[#FFF1A4] to-[#D9B701] bg-clip-text text-transparent font-[Playfair_Display]">
            Today's <span className="text-yellow-500">Special</span> Offers
          </h1>
          <p className="text-lg text-[#FFF2C0] max-w-3xl mx-auto italic">
            Savorthe extraordinary with our culinary masterpieces crafted to perfection
          </p>
        </div>

        {/* Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {displayList.map(item => {
            const cartItem = cartItems.find(ci => ci.item._id === item._id);
            const qty = cartItem ? cartItem.quantity : 0;
            const cartId = cartItem?._id

            return (
              <div key={item._id} className="bg-[#241E1E] rounded-2xl shadow-md px-6 pt-16 pb-6 relative flex flex-col items-center text-center hover:shadow-amber-600/20 transition">
                
                {/* Gambar bulat di atas */}
                <div className="absolute -top-12 w-30 h-30 rounded-full overflow-hidden border-4 border-[#A77101] bg-white shadow-lg">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Nama */}
<h3 className="mt-4 text-xl font-bold bg-gradient-to-r from-[#FFFFFF] via-[#FFF1A4] to-[#D9B701] bg-clip-text text-transparent font-[Playfair_Display]">
  {item.name}
</h3>

                {/* Rating & Heart */}
                <div className="flex justify-center items-center gap-4 mt-3">
<div
  className="flex items-center gap-1 px-3 h-8 rounded-full"
  style={{
    background: "linear-gradient(90deg, #FDE36F 0%, #E2BB11 100%)"
  }}
>
  {renderStars(item.rating)}
</div>

<div
  className="flex items-center gap-1 px-3 h-8 rounded-full"
  style={{
    background: "linear-gradient(90deg, #FDE36F 0%, #E2BB11 100%)"
  }}
>
  <FaHeart className="text-[#FF0000] text-sm" />
  <span className="text-[#FF0000] font-semibold text-sm">{item.hearts}</span>
</div>


                </div>

                {/* Deskripsi */}
                <p className="text-[#FFF2C0] text-sm mt-4 line-clamp-3">{item.description}</p>

    <div className="flex items-center justify-between w-full mt-6">
                  <span className="text-lg text-xl font-bold bg-gradient-to-r from-[#FFFFFF] via-[#FFF1A4] to-[#D9B701] bg-clip-text text-transparent font-[Playfair_Display]">Rp {Number(item.price).toFixed()}</span>

                  {qty > 0 ? (
                    <div className="flex items-center gap-3">
                      <button onClick={() => {
                        qty > 1 ? updateQuantity(cartId, qty - 1) : removeFromCart(cartId)
                      }} className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-700 transition">
                        <HiMinus className="w-4 h-4 text-white" />
                      </button>
                      <span className="w-8 text-center text-amber-100 font-bold">{qty}</span>
                      <button onClick={() => updateQuantity(cartId, qty + 1)}
                        className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center hover:bg-amber-700 transition">
                        <HiPlus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ) : (
<button onClick={() => addToCart(item, 1)}
  className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded-full font-bold flex items-center gap-2">
  <FaPlus /> Add
</button>

                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Button Lihat Semua */}
        <div className="mt-12 flex justify-center">
          <button onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 bg-gradient-to-r from-red-700 to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider hover:scale-105 transition-all">
            <FaFire className="text-xl animate-pulse" />
            <span>{showAll ? 'Sembunyikan' : 'Lihat Semua'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer