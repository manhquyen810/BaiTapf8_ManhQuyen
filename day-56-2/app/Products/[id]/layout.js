import { products } from "@/app/utils/obj";

export const generateMetadata = ({ params }) => {
  const { id } = params;
  const product = products.find((product) => product.id === id);

  if (product) {
    return {
      title: product.name,
      description: `Thông tin về sản phẩm ${product.name}`,
    };
  }
};

export default function ProductLayout({ children }) {
  return <>{children}</>;
}
