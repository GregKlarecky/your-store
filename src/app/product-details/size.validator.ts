import { ValidationErrors, ValidatorFn, FormControl } from "@angular/forms";

export const stringValidator: ValidatorFn = (
  control: FormControl
): ValidationErrors | null => {
  return typeof control.value === "string" ? { stringType: true } : null;
};
