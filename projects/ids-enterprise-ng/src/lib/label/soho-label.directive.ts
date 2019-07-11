import {
  Directive,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: 'label[soho-label]' // tslint:disable-line
})
export class SohoLabelDirective {
  /**
   * Indicate that the label is audible
   */
  @Input() audible: boolean;

  /**
   * Indicate that the label is required
   */
  @Input() required: boolean;

  /**
   * Indicate that the label is for checkbox or non-checkbox
   */
  @Input() forCheckBox: boolean;

  /**
   * Indicate that the label is for radiobutton or non-radiobutton
   */
  @Input() forRadioButton: boolean;

  /**
   * Bind attributes to the host label element
   */
  @HostBinding('class.label') get isLabel() {
    return !this.forCheckBox && !this.forRadioButton;
  }

  @HostBinding('class.checkbox-label') get isCheckBoxLabel() {
    return this.forCheckBox && !this.forRadioButton;
  }

  @HostBinding('class.radio-label') get isRadioButtonLabel() {
    return this.forRadioButton && !this.forCheckBox;
  }

  @HostBinding('class.audible') get isAudible() {
    return this.audible ? true : false;
  }

  @HostBinding('class.required') get isRequired() {
    return this.required ? true : false;
  }
}
