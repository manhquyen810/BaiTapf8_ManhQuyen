import Link from "next/link.js";
import Image from "next/image.js";
import { icon } from "../svg/icon.js";
import styles from "./homePage.module.css";
export default function Header() {
  return (
    <header className={styles.homePage}>
      <Link href="/">F88</Link>
      <div className={styles.homeSelection}>
        <Link href="/">Trang chủ</Link>
        <Link href="/contact">Liên hệ</Link>
      </div>
      <div className={styles.homeUser}>
        <Link href="/user">{icon}</Link>
      </div>
    </header>
  );
}
