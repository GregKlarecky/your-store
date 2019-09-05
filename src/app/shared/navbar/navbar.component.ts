import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "../base/base.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent extends BaseComponent
  implements OnInit, OnDestroy {
  isMenuToggled: boolean;
  constructor(private menuService: MenuService) {
    super();
  }

  ngOnInit() {
    this.watchMenuState();
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
