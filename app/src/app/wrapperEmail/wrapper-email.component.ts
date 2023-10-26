import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../all-services.service';
import { EmailInterface } from '../model';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-wrapper-email',
  templateUrl: './wrapper-email.component.html',
  styleUrls: ['./wrapper-email.component.css']
})
export class WrapperEmailComponent implements OnInit {
  constructor(private allServicesService: AllServicesService) { }
  public emails: Observable<EmailInterface[]> = this.allServicesService.getEmails().pipe();
  ngOnInit(): void { }
}
