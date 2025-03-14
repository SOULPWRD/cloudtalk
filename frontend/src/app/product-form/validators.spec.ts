import {greaterThan} from "./validators";
import {FormControl} from "@angular/forms";

describe("greaterThan", () => {
  it("validates the form control against positive number", () => {
    const greaterThanZero = greaterThan(0);
    const control = new FormControl("1");
    expect(greaterThanZero(control)).toBe(null);
  });

  it("invalidates the form control input against 0", () => {
    const greaterThanZero = greaterThan(0);
    const control = new FormControl("0");
    expect(greaterThanZero(control)).toEqual({
      greaterThan: {
        value: control.value,
        message: "Value must be greater than 0"
      }
    });
  });

  it("invalidates the form control against negative number", () => {
    const greaterThanZero = greaterThan(0);
    const control = new FormControl("-1");
    expect(greaterThanZero(control)).toEqual({
      greaterThan: {
        value: control.value,
        message: "Value must be greater than 0"
      }
    });
  });
});
