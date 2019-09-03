import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomModalService } from "../services/custom-modal.service";
import { trigger, transition, style, animate } from "@angular/animations";

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
export class AddToCartComponent implements OnInit {
  @Input() item;
  public show: boolean = true;

  constructor(
    public activeModal: NgbActiveModal,
    private customModalService: CustomModalService
  ) {}

  ngOnInit() {}

  public close() {
    this.show = false;
    this.customModalService.backdropSubject.next(false);
    setTimeout(() => {
      this.activeModal.close("Close click");
    }, 350);
  }
}
