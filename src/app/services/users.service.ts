import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.test';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private endpoint = `${environment.host}/user`;
  private httpClient = inject(HttpClient);

  formData: any | undefined;

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData(): any {
    return this.formData;
  }

  clearFormData() {
    this.formData = undefined;
  }

  getById(user_id: number) {
    return lastValueFrom(this.httpClient.get<any>(`${this.endpoint}/${user_id}`));
  }

  create(user: any) {
    return lastValueFrom(this.httpClient.post<any>(this.endpoint, user));
  }

  setToken(user_id: number) {
    return lastValueFrom(this.httpClient.patch<any>(`${this.endpoint}/token/${user_id}`,{}));
  };

  resetToken(user_id: number) {
    return lastValueFrom(this.httpClient.patch<any>(`${this.endpoint}/token/reset/${user_id}`,{}));
  }

  confirmEmail(user_id: number, token_input: string) {
    return lastValueFrom(this.httpClient.patch<any>(`${this.endpoint}/confirm_email/${user_id}`,{ token_input}));
  }

  remove(user_id: any) {
    return lastValueFrom(this.httpClient.delete<any>(this.endpoint, user_id));
  }
}
