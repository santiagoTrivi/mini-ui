import { AccessTokenResponse } from "../types/types";
import { API_URL } from "./authConstants";

export default async function requestNewAccessToken(refreshToken: string) {
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  if (response.ok) {
    const json = await response.json(); //as AccessTokenResponse;

    if (json.error) {
      throw new Error(json.error);
    }
    return json.access_token;
  } else {
    throw new Error("Unable to refresh access token.");
  }
}
