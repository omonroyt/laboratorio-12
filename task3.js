import { getServerURL } from "./task1.js";

export async function addUser(firstName, lastName, email) {
  const usersResponse = await fetch(getServerURL() + "/users");
  const users = await usersResponse.json();

  const maxId = users.reduce((max, u) => Math.max(max, Number(u.id) || 0), 0);
  const newUser = {
    id: maxId + 1,
    first_name: firstName,
    last_name: lastName,
    email: email,
  };

  const createResponse = await fetch(getServerURL() + "/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  const created = await createResponse.json();

  console.log(created);

  return created;
}
