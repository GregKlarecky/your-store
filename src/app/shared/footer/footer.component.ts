import { Component, OnInit, OnDestroy } from "@angular/core";
import { FooterService } from "src/app/services/footer.service";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "../base/base.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent extends BaseComponent
  implements OnInit, OnDestroy {
  public show: boolean = false;
  constructor(private footerService: FooterService) {
    super();
  }

  ngOnInit() {
    this.footerService.showFooter
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(ifShow => {
        this.show = ifShow;
      });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
