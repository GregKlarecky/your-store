import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { SubcategoryComponent } from "./subcategory/subcategory.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { PaymentComponent } from "./payment/payment.component";
import { OrderComponent } from "./order/order.component";
import { OrderCompleteComponent } from "./order-complete/order-complete.component";

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
  },
  {
    path: "checkout/shipping",
    component: ShippingComponent
  },
  {
    path: "checkout/payment",
    component: PaymentComponent
  },
  {
    path: "checkout/order",
    component: OrderComponent
  },
  {
    path: "checkout/order-complete",
    component: OrderCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
