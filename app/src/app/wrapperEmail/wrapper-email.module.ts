import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperEmailComponent } from './wrapper-email.component';
import { IndexComponent } from './index/index.component';
import { MatTableModule } from '@angular/material/table';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [WrapperEmailComponent, IndexComponent, PlaceHolderComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [WrapperEmailComponent]
})
export class WrapperEmailModule {
  constructor() { }
}
