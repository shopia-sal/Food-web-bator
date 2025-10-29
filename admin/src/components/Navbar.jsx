import React, { useState } from 'react'
import { styles } from '../assets/dummyadmin';
import { GiChefToque } from "react-icons/gi";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState()

  return (
    <nav className={styles.navWrapper}>
        <div className={styles.navContainer}>
            <div className={styles.logoSection}>
            <GiChefToque className={styles.logoIcon} />
            <span className={styles.logoText}>Admin Panel</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
