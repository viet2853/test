import { ProductType } from "../../types/Product.type";

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  const { id, name, images, feature, technologies } = product;
  return `<div class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
  <div class="shrink-0">
    <a href="/products/${id}">
      <img
          class="h-36 w-36 hover:translate-y-1"
          src="${images?.[0]}"
          alt="Project Web Design"
          loading="lazy"
      />
    </a>
  </div>
  <div>
    <div class="flex flex-col items-center gap-y-2 md:flex-row">
      <a class="hover:text-cyan-400" href="/products/${id}"
        ><div class="text-xl font-semibold">${name}</div></a
      >
      <div class="ml-3 flex gap-2">
        ${technologies
          .split(",")
          .slice(0, 10)
          .map(
            (tech) =>
              `<div class="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">
            ${tech}
            </div>`
          )
          .join("")}
          <div class="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">...</div>
      </div>
    </div>
    <p class="mt-3 text-gray-400 line-clamp-3">
      ${feature}
    </p>
  </div>
</div>
`;
}
