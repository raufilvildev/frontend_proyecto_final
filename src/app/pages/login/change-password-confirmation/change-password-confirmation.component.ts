import { Component, Input } from '@angular/core';
import { TokenConfirmationComponent } from '../../../shared/token-confirmation/token-confirmation.component';

@Component({
  selector: 'app-change-password-confirmation',
  imports: [ TokenConfirmationComponent ],
  templateUrl: './change-password-confirmation.component.html',
  styleUrl: './change-password-confirmation.component.css'
})
export class ChangePasswordConfirmationComponent {
  @Input() user_id: string = '';
}
