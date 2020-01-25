export interface IUserResponse{
  success: boolean;
  token: string;
  user: IUser
}

export interface IUser{
  name: string;
  surname?: string;
  email: string;
  dateCreated: Date;
}