import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllServicesService } from 'src/app/all-services.service';
import { EmailInterface } from 'src/app/model';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent implements OnInit {
  selectedRow: Observable<EmailInterface> = this.allServicesService.selectedRows$$;
  constructor(private allServicesService: AllServicesService) { }
  ngOnInit(): void {
    console.log(this.selectedRow);
  }
}
