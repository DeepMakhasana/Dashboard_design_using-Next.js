import Image from 'next/image'
import styles from './topbar.module.css'

const Topbar = () => {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.topbarContent}>
                {/* sidebar */}

                <div className={styles.sidebar}></div>
                <div className={styles.topbarMiddle}>
                    <span className={styles.last30Day}>Last 30 days:</span>
                    <div className={styles.todayIncome}>
                        <div className={`${styles.box} ${styles.paidBox}`}>
                            <span>PAID</span>
                            <h5>€24.000</h5>
                        </div>
                        <div className={`${styles.box} ${styles.pendingBox}`}>
                            <span>PENDING</span>
                            <h5>€41.000</h5>
                        </div>
                        <div className={`${styles.box} ${styles.overdueBox}`}>
                            <span>OVERDUE</span>
                            <h5>€65.600</h5>
                        </div>
                    </div>

                </div>
                <div className={styles.userDetail}>
                    <Image src={"/user.png"} alt='user profile' width={50.42} height={50.42} />
                    <h4>Jort KKKKKKKKKKKK</h4>
                </div>
            </div>

        </div>
    )
}

export default Topbar
