import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TokenConfirmationComponent } from '../../../shared/token-confirmation/token-confirmation.component';

@Component({
    selector: 'app-email-confirmation',
    imports: [FormsModule, TokenConfirmationComponent],
    templateUrl: './email-confirmation.component.html',
    styleUrl: './email-confirmation.component.css',
})
export class EmailConfirmationComponent {
    @Input() user_id: string = '';
}
