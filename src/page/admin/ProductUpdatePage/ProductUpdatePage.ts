import { getProduct, updateProduct } from "../../../api/product.api";
import { router, useEffect, useState } from "../../../lib";
import { ProductType } from "../../../types/Product.type";
import { handleUploadFile } from "../../../utils/util";

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
      'textarea[name="description"]'
    ) as HTMLTextAreaElement;

    const feature = document.querySelector(
      'textarea[name="feature"]'
    ) as HTMLTextAreaElement;

    const technologies = document.querySelector(
      'textarea[name="technologies"]'
    ) as HTMLTextAreaElement;

    const live = document.querySelector(
      'input[name="live"]'
    ) as HTMLInputElement;

    const source = document.querySelector(
      'input[name="source"]'
    ) as HTMLInputElement;
    const images = document.querySelector(
      'input[name="images"]'
    ) as HTMLInputElement;
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        let listImage;
        if ((images.files?.length as number) > 0) {
          listImage = await handleUploadFile(images.files as unknown as File[]);
        } else {
          listImage = product.images;
        }

        const formData = {
          id,
          name: name.value,
          author: author.value,
          description: description.value,
          feature: feature.value,
          technologies: technologies.value,
          live: live.value,
          source: source.value,
          images: listImage,
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
  return `<div>
          <div class="mx-auto z-50 justify-center flex w-full md:inset-0 h-modal md:h-full">
              <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div
                  class="relative p-4 rounded-lg shadow bg-gray-800 sm:p-5"
                >
                  <!-- Modal header -->
                  <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 border-gray-600"
                  >
                    <h3 class="text-lg font-semibold  text-white">
                      Edit Product
                    </h3>
                  </div>
                  <!-- Modal body -->
                  <form action="#">
                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                      <div>
                        <label
                          for="name"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Name</label
                        >
                        <input
                          type="text"
                          value="${product.name}"
                          name="name"
                          id="name"
                          class=" border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Product name"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="author"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Author</label
                        >
                        <input
                          type="text"
                          value="${product.author}"
                          name="author"
                          id="author"
                          class=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Author"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="live"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Live</label
                        >
                        <input
                          type="text"
                          name="live"
                          value="${product.live}"
                          id="live"
                          class=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="https://netlify.com"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="source"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Source</label
                        >
                        <input
                          type="text"
                          name="source"
                          value="${product.source}"
                          id="source"
                          class=" border   text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="https://github.com"
                          required=""
                        />
                      </div>
                      <div class="sm:col-span-2">
                        <label
                          for="description"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Description</label
                        >
                        <textarea
                          id="description"
                          name="description"
                          rows="2"
                          class="block p-2.5 w-full text-sm  rounded-lg border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Write product description here"
                        >${product.description}</textarea>
                      </div>
                      <div class="sm:col-span-2">
                        <label
                          for="feature"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Feature</label
                        >
                        <textarea
                          id="feature"
                          name="feature"
                          rows="2"
                          class="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Write product feature here"
                        >${product.feature}</textarea>
                      </div>
                      <div class="sm:col-span-2">
                        <label
                          for="technologies"
                          class="block mb-2 text-sm font-medium  text-white"
                          >Technologies</label
                        >
                        <textarea
                          id="technologies"
                          name="technologies"
                          rows="2"
                          class="block p-2.5 w-full text-sm   rounded-lg border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-300 text-white focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Write product technologies here"
                        >${product.technologies}</textarea>
                      </div>
                      <div class="flex sm:col-span-2 items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2  border-dashed rounded-lg cursor-pointer  hover:bg-bray-800 bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" name="images" type="file" multiple class="hidden" />
                        </label>
                      </div> 

                    </div>
                    <button
                      type="submit"
                      class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
                    >
                      <svg
                        class="mr-1 -ml-1 w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Edit product
                    </button>
                  </form>
                </div>
              </div>
            </div>
            </div>
  `;
}
