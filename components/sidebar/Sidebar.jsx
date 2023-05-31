"use client";
import React, { useState } from 'react'
import styles from './sidebar.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ toggleSide }) => {
    const [toggle, setToggle] = useState(false);
    const toggleSidebar = () => {
        if (toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
        toggleSide();
    }
    return (
        <>
            <div className={toggle ? styles.closeSidebar : styles.sidebarContainer}>
                <div className={styles.logoSection}>
                    <div className={styles.toggleIcon} onClick={toggleSidebar}>
                        {toggle ? <Image src={"/sidebarIcon/close.svg"} alt='close' width={24} height={24} /> : <Image src={"/sidebarIcon/open.svg"} alt='open' width={24} height={24} />}
                    </div>
                    <div className={styles.logo}>
                        <img src="./Logo.png" alt="pay logo" />
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <ul>
                        <li><Link href={"/"}><Image src={"/sidebarIcon/home.png"} alt='home' width={16} height={16} /> <span>Home</span>  </Link></li>
                        <li><Link href={"/"}><Image src={"/sidebarIcon/invoices.png"} alt='invoices' width={16} height={16} /> <span>Invoices</span> </Link></li>
                        <li><Link href={"/"}><Image src={"/sidebarIcon/customer.png"} alt='customer' width={16} height={16} /> <span>Customer</span> </Link></li>
                        <li><Link href={"/"}><Image src={"/sidebarIcon/product.png"} alt='products' width={16} height={16} /> <span>Products</span> </Link></li>
                        <li><Link href={"/"}><Image src={"/sidebarIcon/recurring.png"} alt='recurring' width={16} height={16} /> <span>Recurring</span> </Link></li>
                        <li><Link href={"/"}><Image src={"/sidebarIcon/discount.png"} alt='discount' width={16} height={16} /> <span>Discount</span> </Link></li>
                    </ul>
                </div>
            </div>
            <div className={toggle ? `${styles.logoSection} ${styles.closeIcon}` : styles.closeIcon}>
                <div className={styles.toggleIcon} onClick={toggleSidebar}>
                    {toggle ? <Image src={"/sidebarIcon/close.svg"} alt='close' width={24} height={24} /> : <Image src={"/sidebarIcon/open.svg"} alt='open' width={24} height={24} />}
                </div>
                <div className={styles.logo}>
                    <img src="./Logo.png" alt="pay logo" />
                </div>
            </div>
        </>
    )
}

export default Sidebar
