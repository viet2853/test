import { render, router } from "./src/lib";
import ProductsAdminPage from "./src/page/admin/ProductsPage";
import ProductAddAdminPage from "./src/page/admin/ProductAddPage";
import ProductUpdateAdminPage from "./src/page/admin/ProductUpdatePage";
import AdminLayout from "./src/layouts/AdminLayout";
import MainLayout from "./src/layouts/MainLayout";
//
import HomePage from "./src/page/HomePage";
import ProductDetailPage from "./src/page/ProductDetailPage";
import PostDetailPage from "./src/page/PostDetailPage";
import { Match } from "navigo";
import NotFound from "./src/page/NotFound";
const app = document.querySelector("#app");
if (app) {
  //Admin
  router.on("/admin/products", () =>
    render(() => AdminLayout(ProductsAdminPage), app)
  );
  router.on("/admin/products/add", () =>
    render(() => AdminLayout(ProductAddAdminPage), app)
  );
  router.on("/admin/products/:id/edit", (data) =>
    render(
      () => AdminLayout(() => ProductUpdateAdminPage((data as Match).data)),
      app
    )
  );
  //Client
  router.on("/", () => render(() => MainLayout(HomePage), app));
  router.on("/products/:id", (data) =>
    render(() => MainLayout(() => ProductDetailPage((data as Match).data)), app)
  );
  router.on("/posts/:id", (data) =>
    render(() => MainLayout(() => PostDetailPage((data as Match).data)), app)
  );

  router.notFound(() => NotFound);
  router.resolve();
}
