import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
   <nav className={styles.header}>
      <div className={styles.header__logo}>
          <Image src='/logo.png' alt='logo' 
              width={80}
              height={30}
          />
      </div>
      <div className={styles.header__filterSection}>
        
      </div>
   </nav>
  )
}

export default Header