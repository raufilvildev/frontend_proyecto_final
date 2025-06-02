export interface IUser {
    id?: number;
    first_name: string;
    last_name: string;
    email: string;
    birth_date: Date | string;
    gender: string;
    username: string;
    password?: string;
}
