import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/store/models/user.model';
import { SetUserDetails } from '../../store/actions/user.actions';

interface AppState {
  user: User
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  starterForm: FormGroup;
  step = 0;

  user: Observable<User>

  constructor( private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) { 
    this.user = this.store.select('user')
    this.starterForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      budget: ['', Validators.compose([Validators.required])],
      convert: ['yes', Validators.compose([Validators.required])],
      country: ['roman', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[+*0-9 ]*')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });

  }

  ngOnInit(): void {
  }

  goto() {
    if(this.starterForm.controls.convert.value && this.starterForm.controls.budget.value) this.step = 1
  }


  storeUserData() {
    if(this.starterForm.valid) {
      this.store.dispatch(new SetUserDetails(this.starterForm.value))
      this.router.navigateByUrl('account')
    }
  }

}
