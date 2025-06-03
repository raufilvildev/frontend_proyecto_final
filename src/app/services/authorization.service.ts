import { inject, Injectable } from "@angular/core";
import { environment } from '../../environments/environment.test';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { IToken } from "@app/interfaces/itoken.interface";
import { IMessage } from "@app/interfaces/imessage.interface";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private endpoint = `${environment.host}/authorization`;
    private httpClient = inject(HttpClient);

    requestConfirmationByEmail(token: string, type: string) {
        return lastValueFrom(this.httpClient.post<IMessage>(`${this.endpoint}/email_confirmation/request/${type}`, {}, { headers: { Authorization: token } }));
    }

    checkRandomNumberInput(token: string, random_number_input: string) {
      return lastValueFrom(this.httpClient.post<IToken>(`${this.endpoint}/email_confirmation`, { random_number_input }, { headers: { Authorization: token } }));
    }

    checkEmail(email: string) {
      return lastValueFrom(this.httpClient.post<IToken>(`${this.endpoint}/check_email`, { email }));
    }

    resetRandomNumber() {
      return lastValueFrom(this.httpClient.patch<IMessage>(`${this.endpoint}/reset/random_number`, {}))
    }
}