import { HttpClient } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { EmptyError, Observable, catchError, map, of, tap, empty } from 'rxjs';
import { AllServicesService } from '../all-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private allServicesService: AllServicesService,
    private router: Router
  ) {}

  private checkUsername(): AsyncValidatorFn {
    const fn: AsyncValidatorFn = (
      control: AbstractControl
    ): Observable<ValidationErrors | null> => {
      return this.allServicesService.checkUserName(control.value).pipe(
        map(() => {
          return null;
        }),
        catchError(() => {
          return of({ usernameExists: true });
        })
      );
    };

    return fn;
  }
  
  public form: FormGroup = this.fb.group({
    username: this.fb.control(
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(10)],
      [this.checkUsername()]
    ),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    passwordConfirmation: this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
  },{
    validators:this.checkEqualPasswordWithPasswordConfirmation()
  });

  private checkEqualPasswordWithPasswordConfirmation():ValidatorFn{
      return (form:FormGroup):ValidationErrors | null=>{
        const password=form.controls.password.value
        const passwordConfirmation=form.controls.passwordConfirmation.value
        
          return password!==passwordConfirmation ? {notEqual:true} : null
      }
  }

  onSubmit() {
    this.allServicesService.signup(this.form.value).subscribe((res) => {
      this.allServicesService.isLogin$.next(true);
      this.router.navigate(['inbox']);
    });
  }
}
