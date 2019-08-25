import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { SubcategoryComponent } from "./subcategory/subcategory.component";
import { CartComponent } from "./cart/cart.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
