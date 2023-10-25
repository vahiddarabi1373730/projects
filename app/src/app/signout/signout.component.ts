import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../all-services.service';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(
    private allServicesService: AllServicesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.allServicesService
      .signOut()
      .pipe(
        delay(3000),
        tap(() => {
          this.allServicesService.setLogin(false);
          this.router.navigate(['signIn']);
        })
      )
      .subscribe();
  }
}
