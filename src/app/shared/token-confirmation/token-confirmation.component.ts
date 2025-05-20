import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token-confirmation',
  imports: [ FormsModule ],
  templateUrl: './token-confirmation.component.html',
  styleUrl: './token-confirmation.component.css'
})
export class TokenConfirmationComponent {
  usersService = inject(UsersService);
  router = inject(Router);

  @Input() user_id: number = 0;
  @Input() isSignup: boolean = true;

  user: any = {};

  token: string = "";
  isCorrectToken: boolean = true;
  errorServer = false;

  setToken(user_id: number) {
    this.usersService.setToken(user_id);
    setTimeout(() => this.usersService.resetToken(this.user_id), 300000);
  }

  async onSubmit(tokenForm: any) {
    try {
      const result = await this.usersService.confirmEmail(this.user_id, tokenForm.token_input);
      if (this.isSignup) {
        this.router.navigate([ 'dashboard', this.user.id ])
        return
      }
      this.router.navigate([ 'login', 'change_password', this.user.id ]);
    } catch (error) {
      this.isCorrectToken = false;
      this.errorServer = false;
    }
  }

  async ngOnInit() {
    this.user = await this.usersService.getById(this.user_id);
    
    if (!this.user) {
      this.router.navigate(['home']);
    }

    this.setToken(this.user_id);
  }
}
