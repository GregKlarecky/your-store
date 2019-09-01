import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FooterService } from "src/app/services/footer.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  public show: boolean = false;
  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerService.showFooter.subscribe(ifShow => {
      this.show = ifShow;
    });
  }
}
