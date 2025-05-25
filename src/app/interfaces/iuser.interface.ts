export interface IUser {
  id?: number;
  name: string;
  email: string;
  phone: string;
  birth_date: Date;
  gender: string;
  username: string;
  password?: string;
}
