import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignoutComponent } from './signout.component';
import { RouterModule, Routes } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [{ path: '', component: SignoutComponent }];

@NgModule({
  declarations: [SignoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
  ],
})
export class SignoutModule {}
