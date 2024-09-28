"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products } from "@/app/utils/obj";

export default function ProductDetail(params) {
  const { id } = params.params;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (id) {
      const selectedProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(selectedProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Đang tải...</div>;
  }

  return (
    <div
      style={{
        padding: "10px 400px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", height: "300px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h1>{product.name}</h1>
          <p>
            Giá gốc:{" "}
            <span style={{ textDecoration: "line-through" }}>
              {product.price} VND
            </span>
          </p>
          <p>Giá khuyến mãi: {product.salePrice} VND</p>
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
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
            <button
              style={{
                padding: "10px",
                background: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
      <p>Description: ...</p>
    </div>
  );
}
