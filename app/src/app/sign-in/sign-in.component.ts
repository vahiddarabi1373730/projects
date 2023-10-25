import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllServicesService } from '../all-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(
    private fb: FormBuilder,
    private allServicesService: AllServicesService,
    private router: Router
  ) {}
  public form: FormGroup = this.fb.group({
    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
  });

  onSubmit() {
    this.allServicesService.signIn(this.form.value).subscribe((res) => {
      this.allServicesService.isLogin$.next(true);
      this.router.navigate(['inbox']);
    });
  }
}
