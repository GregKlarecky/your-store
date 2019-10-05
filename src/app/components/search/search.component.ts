import { Component, OnInit } from "@angular/core";
import { MenuService } from "src/app/services/menu.service";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "src/app/shared/base/base.component";
import { trigger, transition, style, animate } from "@angular/animations";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("350ms", style({ opacity: 1 }))
      ]),
      transition(":leave", [animate("350ms", style({ opacity: 0 }))])
    ])
  ]
})
export class SearchComponent extends BaseComponent implements OnInit {
  public show: boolean;
  public searchTerm = new FormControl("", [Validators.required]);

  constructor(private menuService: MenuService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.menuService.toggleSearch
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(show => {
        this.show = show;
      });
  }

  public close() {
    this.menuService.toggleSearch.next(false);
  }
  public submit() {
    if (this.searchTerm.valid) {
      this.close();
      this.router.navigate(["/search-results", this.searchTerm.value]);
      this.searchTerm.reset();
    }
  }
}
