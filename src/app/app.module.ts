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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SidemenuComponent,
    FooterComponent,
    BaseComponent,
    SubcategoryComponent,
    CartComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
