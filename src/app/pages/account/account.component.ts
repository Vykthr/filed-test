import { Observable } from 'rxjs';
import { User } from './../../store/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  user: User
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: Observable<User>;
  constructor(private store: Store<AppState>) { 
    this.user = this.store.select('user')
  }

  ngOnInit(): void {
  }

}
