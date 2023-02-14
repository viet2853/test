import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  (): string | null;
}

export default function MainLayout(children: Props) {
  return `<div class="container px-10 text-gray-100">
  <div class="mx-auto max-w-7xl">
    ${Header()}
      ${children()}
    ${Footer()}
  </div >
  </div>`;
}
