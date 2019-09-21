import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { trigger, transition, style, animate } from "@angular/animations";
import { Validators, FormControl } from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { BaseComponent } from "src/app/shared/base/base.component";
import { CustomModalService } from "src/app/services/custom-modal.service";

@Component({
  selector: "app-add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.scss"],
  animations: [
    trigger("slideDown", [
      transition(":enter", [
        style({ transform: "translateY(-90vh)" }),
        animate("350ms", style({ transform: "translateY(0vh)" }))
      ]),
      transition(":leave", [
        animate("350ms", style({ transform: "translateY(-90vh)" }))
      ])
    ])
  ]
})
export class AddToCartComponent extends BaseComponent
  implements OnInit, OnDestroy {
  public sizes: number[] = [42, 43, 44, 45, 46, 47];
  public show: boolean = true;
  @Input() item;
  public productSize = new FormControl("", [Validators.required]);

  constructor(
    public activeModal: NgbActiveModal,
    private customModalService: CustomModalService
  ) {
    super();
  }

  ngOnInit() {
    this.productSize.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        if (value) {
          const payload = { item: { ...this.item }, size: value, amount: 1 };
          setTimeout(() => {
            this.customModalService.sizeChosen.next(payload);
          }, 350);
          this.close();
        }
      });
  }

  public close() {
    this.show = false;
    this.customModalService.backdropSubject.next(false);
    setTimeout(() => {
      this.activeModal.close("Close click");
    }, 350);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
