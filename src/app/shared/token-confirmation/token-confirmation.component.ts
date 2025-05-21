import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token-confirmation',
  imports: [ ReactiveFormsModule ],
  templateUrl: './token-confirmation.component.html',
  styleUrl: './token-confirmation.component.css'
})
export class TokenConfirmationComponent {
  usersService = inject(UsersService);
  router = inject(Router);

  @Input() user_id: string = '';
  @Input() isSignup: boolean = true;

  user: any;

  token: string = "";
  isCorrectToken: boolean = true;
  errorServer = false;

  tokenForm: FormGroup = new FormGroup({
    token_input: new FormControl('', [])
  })

  setToken() {
    this.usersService.setToken(Number(this.user_id));
    setTimeout(() => this.usersService.resetToken(Number(this.user_id)), 300000);
  }

  async onSubmit(tokenForm: any) {
    console.log(tokenForm);
    try {
      await this.usersService.confirmEmail(Number(this.user_id), tokenForm.token_input);
      if (this.isSignup) {
        this.router.navigate([ 'dashboard', this.user.id ])
        return
      }
      this.router.navigate([ 'login', 'change_password', this.user.id ]);
    } catch (error) {
      this.isCorrectToken = false;
      this.errorServer = false;
      this.tokenForm.reset();
    }
  }

  async ngOnInit() {
    this.user = await this.usersService.getById(Number(this.user_id));
    
    if (!this.user) {
      this.router.navigate([ 'home' ]);
      return
    }

    const isConfirmedEmailResult = await this.usersService.checkConfirmEmail(Number(this.user_id));
    const is_confirmed_email = isConfirmedEmailResult.is_confirmed_email;

    if (is_confirmed_email && this.isSignup) {
      this.router.navigate([ 'login' ]);
    }

    this.setToken();
  }
}
