import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Output() usernameChange = new EventEmitter<string>();
  // @Input() username!: string;
  // @Input() password!: string;
  user!: User;
  userAuthForm = this.formBuilder.group ({
    username: '',
    password: ''
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.user = this.userAuthForm.value;    
    console.log("submitted");
    console.log(`username: ${this.user.username}`);
    console.log(`password: ${this.user.password}`);
    console.log(this.user.username);
    console.log(this.user.password);
    if (this.authService.auth(this.user.username, this.user.password)){
      this.usernameChange.emit(this.user.username);
      this.router.navigateByUrl('/');
    }

  }

}
