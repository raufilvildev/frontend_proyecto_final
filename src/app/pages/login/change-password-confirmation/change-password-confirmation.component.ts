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
  user_id: number = 0;
  ngOnInit() {
    this.user_id = this.usersService.getFormData().id;
    this.user_id = 37;
  }
}
