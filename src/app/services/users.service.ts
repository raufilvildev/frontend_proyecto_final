import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.test';
import { IUser } from '../interfaces/iuser.interface';
import { IToken } from '@app/interfaces/itoken.interface';
import { ILogin } from '@app/interfaces/ilogin.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private endpoint = `${environment.host}/user`;
    private httpClient = inject(HttpClient);

    getById(token: string) {
        return lastValueFrom(this.httpClient.get<IUser>(this.endpoint, { headers: { Authorization: token } }));
    }

    create(user: IUser) {
        return lastValueFrom(this.httpClient.post<IToken>(`${this.endpoint}/signup`, user));
    }

    login(loginData: ILogin) {
      return lastValueFrom(this.httpClient.post<IToken>(`${this.endpoint}/login`, loginData));
    }

    changePassword(token: string, password: string) {
      return lastValueFrom(
      this.httpClient.patch<IToken>(
        `${this.endpoint}/login/change_password`,
        { password },
        { headers: { Authorization: token } }
      )
      );
    }
}
