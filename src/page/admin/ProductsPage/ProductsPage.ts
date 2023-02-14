import { deleteProduct, getProducts } from "../../../api/product.api";
import { useEffect, useState } from "../../../lib";
import { ProductType } from "../../../types/Product.type";

export default function ProductsAdminPage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(async () => {
    const res = await getProducts();
    setProducts(res.data);
  }, []);

  useEffect(() => {
    const btnsRemove = document.querySelectorAll(
      ".btn-remove"
    ) as unknown as HTMLButtonElement[];

    btnsRemove.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const { id } = btn.dataset;
        try {
          await deleteProduct(id as string);
          const newProducts = products.filter((product) => product.id != id);
          setProducts(newProducts);
        } catch (error) {
          console.log(error);
        }
      });
    });
  });

  if (products.length === 0) return null;
  return `<div class="text-white">
    <a href="/admin/products/add"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Add+</button><a >
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full bg-slate-800 text-sm text-left">
        <thead class="text-xs uppercase">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Author
                </th>
                <th scope="col" class="px-6 py-3">
                Feature
                </th>
                <th scope="col" class="px-6 py-3">
                Technologies
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            ${products
              .map(
                (product) =>
                  `<tr class="border-b ">
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                        ${product.name}
                    </th>
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                        ${product.author}
                    </th>
                    <th scope="row" class="px-6 max-w-xs overflow-hidden truncate py-4 font-medium whitespace-nowrap dark:text-white">
                        ${product.feature}
                    </th>
                    <th scope="row" class="px-6 max-w-xs overflow-hidden truncate py-4 font-medium whitespace-nowrap dark:text-white">
                        ${product.technologies}
                    </th>
                    
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                        <a href='/admin/products/${product.id}/edit'>
                        <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Edit</button>
                        </a>
                        <button data-id="${product.id}" type="button" class="btn-remove focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Delete</button>
                    </th>
                </tr>`
              )
              .join("")}
        </tbody>
    </table>
    </div>
  </div>`;
}
