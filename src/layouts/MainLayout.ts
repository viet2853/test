import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  (): string | null;
}

export default function MainLayout(children: Props) {
  return `<div class=" min-h-screen w-full bg-slate-900 px-10 text-gray-100">
  <div class="mx-auto container max-w-7xl">
    ${Header()}
      ${children()}
    ${Footer()}
  </div >
  </div>`;
}
