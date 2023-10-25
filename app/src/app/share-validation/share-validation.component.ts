import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: '[app-share-validation]',
  templateUrl: './share-validation.component.html',
  styleUrls: ['./share-validation.component.css'],
})
export class ShareValidationComponent {
  @Input('app-share-validation') control:AbstractControl;
}
