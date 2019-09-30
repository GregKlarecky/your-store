import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { BaseComponent } from "./shared/base/base.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import * as fromCart from "./store/reducers/cart.reducers";
import { environment } from "../environments/environment";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SafeHTMLPipe } from "./pipes/safe-html.pipe";
import { AddressFormComponent } from "./shared/address-form/address-form.component";
import { CartSummaryComponent } from "./shared/cart-summary/cart-summary.component";
import { DeliveryFormComponent } from "./shared/delivery-form/delivery-form.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SubcategoryComponent } from "./components/subcategory/subcategory.component";
import { CartComponent } from "./components/cart/cart.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ShippingComponent } from "./components/shipping/shipping.component";
import { PaymentComponent } from "./components/payment/payment.component";
import { OrderComponent } from "./components/order/order.component";
import { OrderCompleteComponent } from "./components/order-complete/order-complete.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { CounterComponent } from "./components/counter/counter.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { AddToCartComponent } from "./components/add-to-cart/add-to-cart.component";
import { DropDownMenuComponent } from "./components/drop-down-menu/drop-down-menu.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { CustomRadioInputComponent } from "./shared/custom-radio-input/custom-radio-input.component";
import { Ng5SliderModule } from "ng5-slider";
import { NguCarouselModule } from "@ngu/carousel";
import { CarouselComponent } from './shared/carousel/carousel.component';
import { FiltersButtonComponent } from './shared/filters-button/filters-button.component';
import { SortComponent } from './components/sort/sort.component';
import { SearchComponent } from './components/search/search.component';

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
    CartItemComponent,
    SafeHTMLPipe,
    AddressFormComponent,
    CartSummaryComponent,
    DeliveryFormComponent,
    DropDownMenuComponent,
    FiltersComponent,
    CustomRadioInputComponent,
    CarouselComponent,
    FiltersButtonComponent,
    SortComponent,
    SearchComponent
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
    NgbModule,
    Ng5SliderModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddToCartComponent]
})
export class AppModule {}
