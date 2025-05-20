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
  user: any;

  ngOnInit() {
    this.user = this.usersService.getFormData();
    this.user = {
      name: 'Raúl Filigrana Villalba',
      birthDate: '2000-08-01',
      gender: 'M',
      phone: '647065168',
      email: 'raufilvil@gmail.com',
      username: 'raufilvil',
      password: '1234',
    };
  }
}
