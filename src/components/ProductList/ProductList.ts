import { getProducts } from "../../api/product.api";
import { useEffect, useState } from "../../lib";
import { ProductType } from "../../types/Product.type";
import Product from "../Product/Product";

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(async () => {
    const res = await getProducts();
    setProducts(res.data);
  }, []);
  return `<div class="mx-auto py-6">
            <div class="mb-6 text-2xl font-bold">
                <span
                class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
                >Projects</span
                >
            </div>
            <div>
                ${products
                  .map(
                    (product) =>
                      `<div class="mb-4">${Product({ product })}</div>`
                  )
                  .join("")}
            </div>
            </div>
`;
}
