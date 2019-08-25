import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isMenuToggled: boolean;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.watchMenuState();
  }

  watchMenuState() {
    this.menuService.toggleMenu.subscribe(isToggled => {
      this.isMenuToggled = isToggled;
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu.next(!this.isMenuToggled);
  }
}
