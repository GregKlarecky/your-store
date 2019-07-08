import { Component, OnInit } from "@angular/core";
import { IBanner } from "src/interfaces/banners.interface";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  banners: IBanner[] = [
    {
      src: "/assets/banners/banner-1-1.jpg",
      name: "banner-1"
    },
    {
      src: "/assets/banners/banner-2-2-1.jpg",
      name: "banner-1"
    },
    {
      src: "/assets/banners/banner-2.jpg",
      name: "banner-1"
    },
    {
      src: "/assets/banners/banner-3.jpg",
      name: "banner-1"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
