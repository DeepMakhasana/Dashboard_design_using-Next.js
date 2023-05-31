"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [mainContentSizeChange, setMainContentSizeChange] = useState(false);
  const changeWidth = () => {
    if (mainContentSizeChange) {
      setMainContentSizeChange(false);
    } else {
      setMainContentSizeChange(true);
    }
  };
  return (
    <main className={mainContentSizeChange ? "mainClose" : "main"}>
      <Sidebar toggleSide={changeWidth} />
      <div
        className={
          mainContentSizeChange
            ? styles.closeMainContainer
            : styles.mainContainer
        }
      >
        <div className={styles.heading}>
          <h1>Recurring Invoices</h1>
          <Link href="/" className="btn">
            Add recurring invoice <span>+</span>
          </Link>
        </div>

        <div className={styles.recurringBox}>
          <div>
            <p>recurring invoices</p>
            <span>215</span>
          </div>
          <div>
            <p>recurring revenue</p>
            <span>€2500/month</span>
          </div>
          <div>
            <p>recurring overdue</p>
            <span>22</span>
          </div>
        </div>

        <div className={styles.searchSection}>
          <h2>Per client</h2>
          <div className={styles.search}>
            <input type="text" placeholder="Search client" />
            <button>
              Search{" "}
              <Image src="/search.svg" alt="search" width={16} height={16} />
            </button>
          </div>
        </div>

        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th># send</th>
                <th>end date</th>
                <th>Interval</th>
                <th>amount</th>
                <th>Edit</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Image
                    src="/client.png"
                    alt="client"
                    width={55}
                    height={55}
                  />{" "}
                  MadeByMack
                </td>
                <td>25</td>
                <td>24-20-2024</td>
                <td>3/month</td>
                <td>€3000</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/client.png"
                    alt="client"
                    width={55}
                    height={55}
                  />{" "}
                  MadeByMack
                </td>
                <td>25</td>
                <td>24-20-2024</td>
                <td>3/month</td>
                <td>€3000</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/client.png"
                    alt="client"
                    width={55}
                    height={55}
                  />{" "}
                  MadeByMack
                </td>
                <td>25</td>
                <td>24-20-2024</td>
                <td>3/month</td>
                <td>€3000</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/client.png"
                    alt="client"
                    width={55}
                    height={55}
                  />{" "}
                  MadeByMack
                </td>
                <td>25</td>
                <td>24-20-2024</td>
                <td>3/month</td>
                <td>€3000</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/client.png"
                    alt="client"
                    width={55}
                    height={55}
                  />{" "}
                  MadeByMack
                </td>
                <td>25</td>
                <td>24-20-2024</td>
                <td>3/month</td>
                <td>€3000</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src="/client.png"
                    alt="client"
                    width={55}
                    height={55}
                  />{" "}
                  MadeByMack
                </td>
                <td>25</td>
                <td>24-20-2024</td>
                <td>3/month</td>
                <td>€3000</td>
                <td>Edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
