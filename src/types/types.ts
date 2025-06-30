export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}
export interface AuthResponseError {
  body: {
    error: string;
  };
}

export interface User {
  _id: string;
  name: string;
  username: string;
}

export interface AccessTokenResponse {
  statusCode: number;
  body: {
    accessToken: string;
  };
  error?: string;
}
