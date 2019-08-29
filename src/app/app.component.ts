import { Component, OnInit } from "@angular/core";
import { MenuService } from "./services/menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isMenuToggled: boolean;
  disableScroll: boolean = false;
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.watchMenuState();
  }

  watchMenuState() {
    this.menuService.toggleMenu.subscribe(isToggled => {
      this.isMenuToggled = isToggled;
      this.disableScroll = isToggled;
    });
  }
}
