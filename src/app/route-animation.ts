import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate,
  keyframes
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        width: "100%"
      })
    ]),
    query(":enter", [style({ opacity: 0 })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [
        animate(
          "700ms ease-out",
          keyframes([
            style({ opacity: 0, offset: 0.4 }),
            style({ opacity: 0, offset: 1 })
          ])
        )
      ]),
      query(":enter", [
        animate(
          "700ms ease-out",
          keyframes([
            style({ opacity: 0, offset: 0.6 }),
            style({ opacity: 1, offset: 1 })
          ])
        )
      ])
    ]),
    query(":enter", animateChild())
  ])
]);
