import { Component, Input, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/all-services.service';
import { EmailInterface } from 'src/app/model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public imageSrc = ['../../../assets/images/1.jpeg', '../../../assets/images/2.jpeg', '../../../assets/images/3.jpeg', '../../../assets/images/4.jpg']
  constructor(private allServicesService: AllServicesService) { }

  private _emails: EmailInterface[];

  public get emails() {
    return this._emails
  }

  @Input() set emails(emails: EmailInterface[]) {

    for (let i = 0; i < this.imageSrc.length; i++) {
      this._emails = emails?.map((item, index) => {
        return {
          ...item, src: this.imageSrc[index]
        }
      })
    }
  };

  onClickRow(row: EmailInterface) {
    this.allServicesService.selectedRows$.next(row)
  }

  protected displayColumns: string[] = ['from', 'id', 'subject']

  ngOnInit(): void { }
}
