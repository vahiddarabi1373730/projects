export interface SignUpInterface {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignInInterface {
  username: string;
  password: string;
}

export interface EmailInterface {
  from: string,
  id: string,
  subject: string,
  src: string
}