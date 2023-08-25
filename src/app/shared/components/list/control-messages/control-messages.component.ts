import { Component, Input } from '@angular/core';
import { UntypedFormControl, AbstractControl, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/shared/services/validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss']
})
export class ControlMessagesComponent {
  @Input() control: UntypedFormControl | AbstractControl = new FormControl(); // Initialize with a new FormControl instance or default value

  @Input() labelName?: string;

  get errorMessage(): string | undefined {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return ValidationService.getValidationErrorMessage(
          propertyName,
          this.control.errors[propertyName],
          this.labelName
        );
      }
    }

    return undefined;
  }


}
