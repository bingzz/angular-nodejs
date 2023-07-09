import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {
  required: 'Should not be empty',
  email: 'Email is not valid',
  password: 'Password is not valid'
};

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit, OnChanges {
  @Input() control!: AbstractControl;
  @Input() showErrors: boolean = true;
  @Input() errMsg: string[] = [];

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    });

    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation()
  }

  checkValidation() {
    const errors = this.control.errors;

    if (!errors) {
      this.errMsg = [];
      return;
    }

    const errKeys = Object.keys(errors);
    this.errMsg = errKeys.map((key) => VALIDATORS_MESSAGES[key])
  }
}
