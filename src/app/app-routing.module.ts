import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SubcategoryComponent } from "./components/subcategory/subcategory.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ShippingComponent } from "./components/shipping/shipping.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { OrderComponent } from "./components/order/order.component";
import { OrderCompleteComponent } from "./components/order-complete/order-complete.component";

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    data: { animation: "HomePage" }
  },
  {
    path: "subcategory/:id",
    component: SubcategoryComponent,
    data: { animation: "Subcategory" }
  },
  {
    path: "search-results/:search-term",
    component: SubcategoryComponent,
    data: { animation: "Subcategory" }
  },
  {
    path: "cart",
    component: CartComponent,
    data: { animation: "Cart" }
  },
  {
    path: "product/:name/:sku",
    component: ProductDetailsComponent,
    data: { animation: "Product" }
  },
  {
    path: "checkout/shipping",
    component: ShippingComponent,
    data: { animation: "Shipping" }
  },
  {
    path: "checkout/payment",
    component: PaymentComponent,
    data: { animation: "Payment" }
  },
  {
    path: "checkout/order",
    component: OrderComponent,
    data: { animation: "Order" }
  },
  {
    path: "checkout/order-complete",
    component: OrderCompleteComponent,
    data: { animation: "OrderComplete" }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
    BrowserAnimationsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
