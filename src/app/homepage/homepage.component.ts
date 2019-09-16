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
      name: "banner-1",
      text: "<b>Women</b> shoes",
      textClass: "middle right black"
    },
    {
      src: "/assets/banners/banner-2-2-1.jpg",
      name: "banner-1",
      text: "<b>New</b> collection",
      textClass: "top left"
    },
    {
      src: "/assets/banners/banner-2.jpg",
      name: "banner-1",
      text: "Find your <b>inspiration</b>",
      textClass: "middle align bigger-font"
    },
    {
      src: "/assets/banners/banner-3.jpg",
      name: "banner-1",
      text: "<b>Outlet</b>",
      textClass: "bottom left"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
