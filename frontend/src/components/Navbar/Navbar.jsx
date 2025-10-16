import React, {useEffect, useState} from 'react'
import { GiForkKnifeSpoon } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import {
  FiHome,
  FiBook,
  FiStar,
  FiPhone,
  FiShoppingCart,
  FiLogOut,
  FiKey,
  FiPackage,
} from 'react-icons/fi';
import { useCart } from '../../CartContext/CartContext';
import Login from '../../Login/Login';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {totalItems} = useCart();
    const [showLoginModal, setShowLoginModal ] = useState(false);

    const [isAuthenticated, setIsAuthenticated] = useState(
      Boolean(localStorage.getItem('loginData'))
    )

    useEffect(() => {
      setShowLoginModal(location.pathname === '/login');
      setIsAuthenticated(Boolean(localStorage.getItem('loginData')))
    }, [location.pathname])

    const handleLoginSuccess = () => {
      localStorage.setItem('loginData', JSON.stringify({loggedIn: true}));
      setIsAuthenticated(true);
      navigate('/');
    }

    const handleLogout = () => {
      localStorage.removeItem('loginData');
      setIsAuthenticated(false);
    }

    const renderDesktopAuthButton = () => {
      return isAuthenticated ? (
        <button onClick={handleLogout} className='px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-amber-500
        to-amber-700 text-[#2D1B0E] rounded-2xl font-bold hover:shadow-lg hover:shadow-amber-600/40 transition-all
        transform hover:scale-[1.02] border-2 border-amber-600/20 flex items-centerspace-x-2
        shadow-md shadow-amber-900/20 text-xs md:text-sm lg:text-sm'>
          <FiLogOut className='text-base md:text-lg lg:text-lg'/>
          <span className='text-shadow'>Logout</span>
        </button>
      ):(
        <button onClick={() => navigate('/login')} className='px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-amber-500
        to-amber-700 text-[#2D1B0E] rounded-2xl font-bold hover:shadow-lg hover:shadow-amber-600/40 transition-all
        transform hover:scale-[1.02] border-2 border-amber-600/20 flex items-centerspace-x-2
        shadow-md shadow-amber-900/20 text-xs md:text-sm lg:text-sm'>
          <FiKey className='text-base md:text-lg lg:text-lg'/>
          <span className='text-shadow'>Login</span>
        </button>
      )
    }

    const renderMobileAuthButton = () => {
      return isAuthenticated ? (
        <button onClick={handleLogout} className='w-full px-4 py-3 bg-gradient-to-br from-amber-500 to-amber-700
        text-[#2D1B0E] rounded-xl font-semibold flex items-center justify-center space-x-2
        text-sm'>
          <FiLogOut/>
          <span>Logout</span>
        </button>
      ) : (
        <button onClick={() => {
          navigate('/login')
          setIsOpen(false)
        }} className='w-full px-4 py-3 bg-gradient-to-br from-amber-500 to-amber-700
        text-[#2D1B0E] rounded-xl font-semibold flex items-center justify-center space-x-2
        text-sm'>
          <FiKey/>
          <span>Login</span>
        </button>
      )
    }

  const navLinks = [
    { name: 'Home', to: '/', icon: <FiHome /> },
    { name: 'Menu', to: '/menu', icon: <FiBook /> },
    { name: 'About', to: '/about', icon: <FiStar /> },
    { name: 'Contact', to: '/contact', icon: <FiPhone /> },
    ...(isAuthenticated ? [
      {name: 'My Orders', to: '/myOrder', icon: <FiPackage/>}
    ] : [])
  ];

  return (
    <nav className="bg-[#2D1B0E] border-b-8 border-amber-900/30 shadow-amber-900/30 sticky 
    top-0 z-50 shadow-[0_25px_50px_-12px] font-vibes group/nav overflow-hidden">
      
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
        <div className='h-[6px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent
        shadow-[0_0_20px] shadow-amber-500/30' />
        <div className="flex justify-between px-6">
          <GiForkKnifeSpoon className='text-amber-500/40 -mt-4 -ml-2 rotate-45' size={32} />
          <GiForkKnifeSpoon className='text-amber-500/40 -mt-4 -mr-2 rotate-45' size={32} />
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex justify-between items-center h-12 md:h-14 lg:h-16">
          <div className="flex-shrink-0 flex items-center space-x-2 group relative md:-translate-x-4
          lg:-translate-x-6 ml-0 md:ml-2">
            <div className='absolute -inset-4 bg-amber-500/10 rounded-full blur-xl
            opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300' />

            <img 
              src={Logo} 
              alt="Logo Bator Artomorp" 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain
              transition-all group-hover:rotate-12 group-hover:drop-shadow-[0_0_15px] group-hover:drop-shadow-amber-500/50 ml-7 md:ml-9"
            />

            {/* teks/brand name */}
            <div className="flex flex-col relative ml-2 max-w-[140px] md:max-w-[160px] lg:max-w-none">
              <NavLink to='/' className='text-[14px] md:text-[16px] lg:text-[18px] bg-gradient-to-r from-amber-400
              to-amber-600 bg-clip-text text-transparent font-monsieur tracking-wider drop-shadow-[0_2px_2px]
              drop-shadow-black -translate-x-2 truncate md:truncate-none'>
                Bator Artomoro Food
              </NavLink>
              <div className='h-[3px] bg-gradient-to-r from-amber-600/30 via-amber-400/50 to-amber-600/30 w-full
              mt-1 ml-1 shadow-[0_2px_5px] shadow-amber-500/20' />
            </div>
          </div>
          
                    <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-1 justify-end">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                className={({ isActive }) =>
                                    `px-2 xl:px-4 py-2 flex items-center space-x-2 rounded-3xl border-2 transition-colors text-sm xl:text-base
                      ${isActive ? 'bg-amber-900/20 border-amber-600/50' : 'border-transparent hover:border-amber-600/50'}`
                                }
                            >
                                <span className="text-amber-500">{link.icon}</span>
                                <span className="text-amber-100">{link.name}</span>
                            </NavLink>
                        ))}
                        <div className="flex items-center space-x-2 xl:space-x-4 ml-2 xl:ml-4">
                            <NavLink
                                to="/cart"
                                className="p-2 relative text-amber-100 hover:text-amber-300 transition-colors"
                            >
                                <FiShoppingCart className="text-lg xl:text-xl" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-amber-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </NavLink>
                            {renderDesktopAuthButton()}
                        </div>
                    </div>


                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-amber-500 hover:text-amber-300 p-2 rounded-xl border-2 border-amber-900/30 transition-colors"
                        >
                            <div className="space-y-2">
                                <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block w-6 h-0.5 bg-current ${isOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>
        </div>
      </div>

            {isOpen && (
                <div className="lg:hidden bg-[#2D1B0E] border-t-4 border-amber-900/40">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center space-x-3 px-4 py-3 rounded-xl ${isActive ? 'bg-amber-600/30 text-amber-400' : 'text-amber-100 hover:bg-amber-600/20'
                                    }`
                                }
                            >
                                <span className="text-amber-500">{link.icon}</span>
                                <span>{link.name}</span>
                            </NavLink>
                        ))}
                        <div className="pt-4 border-t border-amber-900/40 space-y-3">
                            <NavLink
                                to="/cart"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center space-x-2 px-4 py-3 text-amber-100 hover:bg-amber-600/20 rounded-xl"
                            >
                                <FiShoppingCart />
                                <span>Cart</span>
                                {totalItems > 0 && (
                                    <span className="bg-amber-600 text-xs px-2 py-1 rounded-full">
                                        {totalItems}
                                    </span>
                                )}
                            </NavLink>
                            {renderMobileAuthButton()}
                        </div>
                    </div>
                </div>
            )}


            {showLoginModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-gradient-to-br from-[#2D1B0E] to-[#4a372a] rounded-xl p-8 w-full max-w-md relative border-4 border-amber-700/30">
                        <button
                            onClick={() => navigate('/')}
                            className="absolute top-4 right-4 text-amber-500 hover:text-amber-300 text-2xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-6 text-center">
                            Foodie-Frenzy
                        </h2>
                        <Login onLoginSuccess={handleLoginSuccess} onClose={() => navigate('/')} />
                    </div>
                </div>
            )}
    </nav>
  )
}

export default Navbar;
