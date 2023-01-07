import Link from "next/link"
import { useRef } from "react";
import styles from '../styles/Navbar.module.css';
import expandMenu from './navigationWorking';

export default function Navbar()
{
    let menu=useRef(null);

    return (
        <>

        <header className={styles.headContainer}>
            
            <Link href="/" className={styles.logo}>
                LOGO
            </Link>

           
            <nav ref={menu} className={styles.mobileMenu}>
    
                <Link href="/products">
                    Products    
                </Link>

                <Link href="/about">
                    About
                </Link>
              
            </nav>

            <div className={styles.menu} onClick={()=>expandMenu(menu)}>
                Menu
            </div>

        </header>

        </>
    )
}