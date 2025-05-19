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

  async getToken(email: string) {
    return lastValueFrom(this.httpClient.get<any>(`${this.endpoint}/token?email=${email}`));
  }

  create(user: any) {
    return lastValueFrom(this.httpClient.post<any>(this.endpoint, user));
  }

  remove(user_id: any) {
    return lastValueFrom(this.httpClient.delete<any>(this.endpoint, user_id));
  }
}
