import { Input, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareValidationComponent } from './share-validation.component';
import { FormControl } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ShareValidationComponent],
  imports: [CommonModule, MatFormFieldModule],
  exports: [ShareValidationComponent],
})
export class ShareValidationModule {}
