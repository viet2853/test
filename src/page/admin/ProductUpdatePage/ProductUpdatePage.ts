import { Match } from "navigo";
import { getProduct, updateProduct } from "../../../api/product.api";
import { router, useEffect, useState } from "../../../lib";
import { ProductType } from "../../../types/Product.type";

interface Props {
  [key: string]: string;
}

export default function ProductUpdateAdminPage(data: Props | null) {
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  let id = (data as Props).id;

  useEffect(async () => {
    if (id) {
      const res = await getProduct(id);
      setProduct(res.data);
    }
  }, [id]);

  useEffect(() => {
    const form = document.querySelector("form");
    const name = document.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;

    const author = document.querySelector(
      'input[name="author"]'
    ) as HTMLInputElement;

    const description = document.querySelector(
      'input[name="description"]'
    ) as HTMLInputElement;

    const feature = document.querySelector(
      'input[name="feature"]'
    ) as HTMLInputElement;

    const technologies = document.querySelector(
      'input[name="technologies"]'
    ) as HTMLInputElement;

    const live = document.querySelector(
      'input[name="live"]'
    ) as HTMLInputElement;

    const source = document.querySelector(
      'input[name="source"]'
    ) as HTMLInputElement;

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = {
          id,
          name: name.value,
          image: "",
          author: author.value,
          description: description.value,
          feature: feature.value,
          technologies: technologies.value,
          live: live.value,
          source: source.value,
        };
        try {
          await updateProduct(formData);
          router.navigate("admin/products");
        } catch (error) {
          console.log(error);
        }
      });
    }
  });
  return `<div class="max-w-4xl mx-auto text-white">
  <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl dark:text-white">Edit Product</h2>
  <form>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
          <input value="${product.name}" type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input value="${product.author}" type="text" name="author" id="author" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="author" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Author</label>
      </div>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input value="${product.description}" type="text" name="description" id="description" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
        <input value="${product.feature}" type="text" name="feature" id="feature" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="feature" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Feature</label>
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <input value="${product.technologies}" type="text" name="technologies" id="technologies" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="technologies" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Technologies</label>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
          <input value="${product.live}" type="text" name="live" id="live" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="live" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Live</label>
      </div>
      <div class="relative z-0 w-full mb-6 group">
          <input value="${product.source}" type="text" name="source" id="source" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="source" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Source</label>
      </div>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form></div>
  `;
}
