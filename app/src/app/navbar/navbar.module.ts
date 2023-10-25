import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { CustomGuard } from '../custom.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'signIn',
    loadChildren: () =>
      import('../sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'signOut',
    loadChildren: () =>
      import('../signout/signout.module').then((m) => m.SignoutModule),
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('../inbox/inbox.module').then((m) => m.InboxModule),
    canActivate: [CustomGuard],
  },
];
@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatTabsModule,RouterModule.forChild(routes)],
  exports: [NavbarComponent],
})
export class NavbarModule {}
