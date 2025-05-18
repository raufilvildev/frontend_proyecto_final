import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { toast } from 'sonner';

@Component({
  selector: 'app-token-confirmation',
  imports: [ FormsModule ],
  templateUrl: './token-confirmation.component.html',
  styleUrl: './token-confirmation.component.css'
})
export class TokenConfirmationComponent {
  @Input() user: any;
  usersService = inject(UsersService);
  router = inject(Router);

  token: string = "";
  isCorrectToken: boolean = true;
  errorServer = false;

  async getToken() {
    const result = await this.usersService.getToken(this.user.email);
    this.token = result.token;
  }

  async create() {
    try {
      const result = await this.usersService.create(this.user);
      this.router.navigate(['dashboard', result.insert_response.insertId]);
    } catch (error) {
      this.isCorrectToken = true;
      this.errorServer = true;
    }
    
  }

  onSubmit(tokenForm: any) {
    if (this.token !== tokenForm.token_input) {
      this.isCorrectToken = false;
      this.errorServer = false;
      return
    }
    
    this.create()
  }

  async ngOnInit() {
    try {
      await this.getToken();
    } catch (error: any) {
      toast.error(error.message);
    }
  }
}
