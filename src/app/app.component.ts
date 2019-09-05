import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "./services/menu.service";
import { CustomModalService } from "./services/custom-modal.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { BaseComponent } from "./shared/base/base.component";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("250ms", style({ opacity: 0.5 }))
      ]),
      transition(":leave", [animate("250ms", style({ opacity: 0 }))])
    ])
  ]
})
export class AppComponent extends BaseComponent implements OnInit, OnDestroy {
  isMenuToggled: boolean;
  isBackdropToggled: boolean;
  disableScroll: boolean = false;
  constructor(
    private menuService: MenuService,
    private customModalService: CustomModalService
  ) {
    super();
  }

  ngOnInit() {
    this.watchMenuState();
    this.toggleBackdrop();
  }

  watchMenuState() {
    this.menuService.toggleMenu
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(isToggled => {
        this.isMenuToggled = isToggled;
        this.disableScroll = isToggled;
      });
  }

  toggleBackdrop() {
    this.customModalService.backdropSubject.subscribe(toggle => {
      this.isBackdropToggled = toggle;
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
