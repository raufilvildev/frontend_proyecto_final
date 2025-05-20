import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { FormsModule } from '@angular/forms';
import { TokenConfirmationComponent } from '../../../shared/token-confirmation/token-confirmation.component';

@Component({
  selector: 'app-email-confirmation',
  imports: [FormsModule, TokenConfirmationComponent],
  templateUrl: './email-confirmation.component.html',
  styleUrl: './email-confirmation.component.css',
})
export class EmailConfirmationComponent {
  usersService = inject(UsersService);
  user_id: number = 0;

  ngOnInit() {
    this.user_id = this.usersService.getFormData()?.id;
    this.user_id = 37;
  }
}
