import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { SubcategoryComponent } from "./subcategory/subcategory.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "subcategory/:id",
    component: SubcategoryComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "product/:name/:sku",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
