import { getProduct } from "../../api/product.api";
import { useEffect, useState } from "../../lib";
import { ProductType } from "../../types/Product.type";

interface Props {
  [key: string]: string;
}

export default function ProductDetailPage(data: Props | null) {
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  let id = (data as Props).id;

  useEffect(async () => {
    if (id) {
      const res = await getProduct(id);
      setProduct(res.data);
    }
  }, [id]);
  if (!product) return null;
  return ` <div>
            <h2 class="text-4xl font-extrabold">${
              product.name
            } - <span class="text-blue-600 ">${product.author}</span></h2>
            <p class="mt-3 text-lg font-normal text-gray-500 dark:text-gray-400">${
              product.description
            }</p>
            <div class="mt-4">
              <span class="text-lg font-bold">Technologies in used: </span>
              ${product.technologies}
            </div>
            <div class="mt-4">
              <span class="text-lg font-bold">Functions include: </span>
              <ul class="list-disc ml-6">
                ${
                  product.feature &&
                  product?.feature
                    .split(".")
                    .map((feat) => `<li class="">${feat}</li>`)
                    .join("")
                }
              </ul>
            </div>
            <div class="mt-4">
              <span class="text-lg font-bold">🔗Webiste: </span>
              <a href="${product.live}">${product.live}<a >
            </div>
            <div class="mt-4">
              <span class="text-lg font-bold">🔗Github: </span>
              <a href="${product.live}">${product.source}<a >
            </div>
        </div>`;
}
