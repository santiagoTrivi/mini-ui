import PortalLayout from "../layout/PortalLayout";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/authConstants";

interface Profile {
  name: string;
  email: string;
}

export default function Profile() {
  const auth = useAuth();
  const [todos, setTodos] = useState<Profile>({});
  const [value, setValue] = useState("");

  async function getProfile() {
    const accessToken = auth.getAccessToken();

    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const json = await response.json();
        console.log(json);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PortalLayout>
      <h1>Profile</h1>
    </PortalLayout>
  );
}
