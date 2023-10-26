import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { RouterModule, Routes } from '@angular/router';
import { WrapperEmailModule } from '../wrapperEmail/wrapper-email.module';
const routes: Routes = [{ path: '', component: InboxComponent }];
@NgModule({
  declarations: [InboxComponent],
  imports: [CommonModule, RouterModule.forChild(routes),WrapperEmailModule],
  exports: [InboxComponent],
})
export class InboxModule {}
