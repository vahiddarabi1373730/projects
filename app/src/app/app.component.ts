import { Component, OnInit } from '@angular/core';
import { AllServicesService } from './all-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private allServicesService: AllServicesService) {}
  ngOnInit(): void {
    this.allServicesService.checkLogin().subscribe((res: any) => {
      this.allServicesService.setLogin(res.authenticated);
    });
  }
}
