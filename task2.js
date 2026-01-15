import { getServerURL } from "./task1.js";
export async function listUsers() {
  try {
    const response = await fetch(getServerURL() + "/users");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error listing users:", err.message);
  }
}
