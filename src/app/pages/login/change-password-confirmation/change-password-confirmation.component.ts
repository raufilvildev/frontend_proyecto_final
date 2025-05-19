import { Component, inject } from '@angular/core';
import { TokenConfirmationComponent } from '../../../shared/token-confirmation/token-confirmation.component';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-change-password-confirmation',
  imports: [ TokenConfirmationComponent ],
  templateUrl: './change-password-confirmation.component.html',
  styleUrl: './change-password-confirmation.component.css'
})
export class ChangePasswordConfirmationComponent {
  usersService = inject(UsersService);
  user: any;
  ngOnInit() {
    this.user = this.usersService.getFormData();
    this.user = {
      email: undefined
    }
  }
}
