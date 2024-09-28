import Image from "next/image";
import styles from "./page.module.css";
import Product from "./Products/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Product />
    </div>
  );
}
