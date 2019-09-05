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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
