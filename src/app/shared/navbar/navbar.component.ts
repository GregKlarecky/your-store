import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "../base/base.component";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent extends BaseComponent
  implements OnInit, OnDestroy {
  isMenuToggled: boolean;
  itemsCount: number;
  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) {
    super();
  }

  ngOnInit() {
    this.watchMenuState();
    this.cartService.newCart.subscribe(items => {
      this.itemsCount = items.length;
    });
  }

  watchMenuState() {
    this.menuService.toggleMenu
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isToggled => {
        this.isMenuToggled = isToggled;
      });
  }

  toggleMenu() {
    this.menuService.toggleMenu.next(!this.isMenuToggled);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
