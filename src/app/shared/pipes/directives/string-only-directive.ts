/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
      selector: '[stringOnly]',
})
export class StringOnlyDirective {
      @Input() stringOnly: boolean;

      navigationKeys: string[] = []; //Add keys as per requirement

      constructor(private _el: ElementRef) { }

      @HostListener('paste', ['$event']) onKeyPaste(e: ClipboardEvent) {
            console.log(e);
            const pastedData = e.clipboardData.getData('text');
            const stringOnly = /^[a-zA-Z0-9 ]+$/;
            if (stringOnly.test(pastedData)) {
                  return true;
            }
            return false;
      }
      @HostListener('keypress', ['$event']) onKeyDown(e: KeyboardEvent) {
            const englishAlphabetAndWhiteSpace = /^[a-zA-Z0-9 ]+$/;
            const key = String.fromCharCode(e.which);

            if (
                  // Allow: Delete, Backspace, Tab, Escape, Enter, etc
                  this.navigationKeys.indexOf(e.key) > -1 ||
                  (e.key === '8' && e.ctrlKey === true) || // Allow: Ctrl+A
                  (e.key === '37' && e.ctrlKey === true) || // Allow: Ctrl+C
                  (e.key === '39' && e.ctrlKey === true) || // Allow: Ctrl+V
                  englishAlphabetAndWhiteSpace.test(key) || // Cmd+A (Mac)
                  (e.key === '.') // Cmd+X (Mac)
            ) {
                  return;  // let it happen, don't do anything
            }
            // Ensure that it is a number and stop the keypress
            if (e.keyCode === 8 || e.keyCode === 37 || e.keyCode === 39 || englishAlphabetAndWhiteSpace.test(key)) {
                  e.preventDefault();
            }
      }

      stringsOnly(event: { which: any; keyCode: any; preventDefault: () => void; }) {
            const charCode = (event.which) ? event.which : event.keyCode;
            const englishAlphabetAndWhiteSpace = /^[a-zA-Z0-9 ]+$/;
            const key = String.fromCharCode(charCode.which);
            if (charCode.keyCode === 8 || charCode.keyCode === 37 || charCode.keyCode === 39 || englishAlphabetAndWhiteSpace.test(key)) {
                  event.preventDefault();
                  return true;
            }
            return false;
      }
}
