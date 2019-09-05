import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { BaseComponent } from "./shared/base/base.component";
import { SubcategoryComponent } from "./subcategory/subcategory.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { PaymentComponent } from "./payment/payment.component";
import { OrderComponent } from "./order/order.component";
import { OrderCompleteComponent } from "./order-complete/order-complete.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductCardComponent } from "./product-card/product-card.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import * as fromCart from "./store/reducers/cart.reducers";
import { environment } from "../environments/environment";
import { CounterComponent } from "./counter/counter.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { CartItemComponent } from "./cart-item/cart-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    BaseComponent,
    SubcategoryComponent,
    CartComponent,
    ProductDetailsComponent,
    ShippingComponent,
    PaymentComponent,
    OrderComponent,
    OrderCompleteComponent,
    ProductCardComponent,
    CounterComponent,
    AddToCartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ cart: fromCart.reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddToCartComponent]
})
export class AppModule {}
