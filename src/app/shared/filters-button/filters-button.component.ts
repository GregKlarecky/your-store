import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-filters-button",
  template: `
    <div class="show-on-mobie button-show-filters" (click)="closeFilters()">
      <span *ngIf="!toggleOn"
        >Hide filters <i class="fas fa-chevron-up"></i>
      </span>
      <span *ngIf="toggleOn"
        >Show filters <i class="fas fa-chevron-down"></i>
      </span>
    </div>
  `,
  styleUrls: ["./filters-button.component.scss"]
})
export class FiltersButtonComponent implements OnInit {
  constructor() {}
  @Input() toggleOn: boolean;

  ngOnInit() {}
}
