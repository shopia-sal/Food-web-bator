import React, { useState } from 'react'
import { useCart } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTimes, FaTrash } from 'react-icons/fa';

const API_URL = import.meta.env.VITE_API_URL;

const CartPage = () => {

  const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  const buildImageUrl = (path) => {
    if (!path) return '';
    return path.startsWith('http') ? path : `${API_URL}/uploads/${path.replace(/^\/uploads\//, '')}`;
  }

  return (
    <div className="min-h-screen overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b120b] via-[#2d1f13] to-[#3b281b] relative">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-32 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl animate-pulse-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-center mb-12 text-5xl sm:text-6xl font-bold font-dancingscript bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent animate-fade-in-down">
          Keranjang Kamu
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center animate-fade-in">
            <p className="text-amber-100/80 text-xl mb-4">Keranjang Kamu Kosong</p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700/40 to-amber-800/40 hover:from-amber-600/60 hover:to-amber-700/60 px-8 py-3 rounded-full text-amber-100 uppercase tracking-wide font-cinzel transition-all duration-300 hover:gap-3 shadow-md hover:shadow-amber-900/20"
            >
              Lihat Semua Item
            </Link>
          </div>
        ) : (
          <>
            {/* Grid Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-up">
              {cartItems.map(({ _id, item, quantity }) => (
                <div
                  key={_id}
                  className="group bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-amber-400/20 hover:border-amber-400/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)] flex flex-col items-center gap-5"
                >
                  {/* Image */}
                  <div
                    className="w-28 h-28 rounded-xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage(buildImageUrl(item.imageUrl || item.image))}
                  >
                    <img
                      src={buildImageUrl(item.imageUrl || item.image)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold font-dancingscript text-amber-100">{item.name}</h3>
                    <p className="text-sm text-amber-200/80 font-cinzel mt-1">Rp{Number(item.price).toFixed()}</p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(_id, Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-900/60 to-amber-700/40 hover:from-amber-800/60 hover:to-amber-600/40 active:scale-95 transition-all"
                    >
                      <FaMinus className="text-amber-100 w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-amber-100 font-cinzel">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(_id, quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-900/60 to-amber-700/40 hover:from-amber-800/60 hover:to-amber-600/40 active:scale-95 transition-all"
                    >
                      <FaPlus className="text-amber-100 w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove & Price */}
                  <div className="flex items-center justify-between w-full mt-auto pt-2">
                    <button
                      onClick={() => removeFromCart(_id)}
                      className="flex items-center gap-1 bg-amber-900/40 px-4 py-2 rounded-full text-xs uppercase font-cinzel hover:bg-amber-800/50 transition-all duration-300 active:scale-95"
                    >
                      <FaTrash className="w-3.5 h-3.5 text-amber-100" />
                      <span className="text-amber-100">Hapus</span>
                    </button>
                    <p className="text-amber-300 font-dancingscript text-lg">Rp{Number(item.price * quantity).toFixed()}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="mt-16 pt-10 border-t border-amber-800/30 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
                <Link
                  to="/menu"
                  className="bg-gradient-to-r from-amber-700/40 to-amber-800/40 hover:from-amber-600/60 hover:to-amber-700/60 px-8 py-3 rounded-full text-amber-100 font-cinzel uppercase tracking-wide transition-all duration-300 hover:shadow-md hover:shadow-amber-900/20 active:scale-95"
                >
                  Lanjutkan Belanja
                </Link>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <h2 className="text-3xl font-dancingscript text-amber-100 drop-shadow-[0_0_5px_rgba(251,191,36,0.3)]">
                    Total: Rp{Number(totalAmount).toFixed()}
                  </h2>
                  <Link
                    to="/checkout"
                    className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-cinzel uppercase px-8 py-3 rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-300 flex items-center gap-2 active:scale-95"
                  >
                    Checkout Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            <img src={selectedImage} alt="Preview" className="rounded-2xl shadow-2xl object-contain max-h-[85vh]" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-amber-700/80 hover:bg-amber-600/80 rounded-full p-2 text-white transition-all duration-200"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
