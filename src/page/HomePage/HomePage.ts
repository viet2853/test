import About from "../../components/About";
import PostList from "../../components/PostList";
import ProductList from "../../components/ProductList";

export default function HomePage() {
  return `<div class="">
            ${About()}
            ${ProductList()}
            ${PostList()}
        </div>`;
}
