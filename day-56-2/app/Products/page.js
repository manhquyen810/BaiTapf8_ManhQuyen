"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "../utils/obj";

export default function Product() {
  // console.log(params);

  const productPage = {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 100px",
  };

  const productStyle = {
    border: "1px solid #ddd",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    cursor: "pointer",
  };

  const router = useRouter();
  console.log(router);

  const onAccessDetail = (id) => {
    router.push(`/Products/${id}`);
  };

  return (
    <div style={productPage}>
      {products.map((product) => (
        <div
          key={product.id}
          style={productStyle}
          onClick={() => onAccessDetail(product.id)}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "200px", height: "200px" }}
          />
          <h3>{product.name}</h3>
          <p>
            Giá gốc:{" "}
            <span style={{ textDecoration: "line-through" }}>
              {product.price}
            </span>{" "}
            VND
          </p>
          <p>Giá khuyến mãi: {product.salePrice} VND</p>
          <button
            style={{
              padding: "10px",
              background: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Mua ngay
          </button>
        </div>
      ))}
    </div>
  );
}
