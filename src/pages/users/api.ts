"use server";

type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
};

let users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", gender: "male" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", gender: "female" },
  { id: 3, name: "Alex Johnson", email: "alex@example.com", gender: "other" },
];

let nextId = 4;

function randomDelay() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 1500) + 500;
    setTimeout(resolve, delay);
  });
}

export async function getUsers(filters?: {
  name?: string;
  email?: string;
  gender?: string;
}) {
  await randomDelay();

  let filteredUsers = [...users];

  if (filters?.name) {
    filteredUsers = filteredUsers.filter((u) =>
      u.name.toLowerCase().includes(filters.name!.toLowerCase())
    );
  }

  if (filters?.email) {
    filteredUsers = filteredUsers.filter((u) =>
      u.email.toLowerCase().includes(filters.email!.toLowerCase())
    );
  }

  if (filters?.gender) {
    filteredUsers = filteredUsers.filter(
      (u) => u.gender.toLowerCase() === filters.gender!.toLowerCase()
    );
  }

  return filteredUsers;
}

export async function getUser(id: number) {
  await randomDelay();
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return { ...user };
}

export async function createUser(name: string, email: string, gender: string) {
  await randomDelay();
  const newUser: User = {
    id: nextId++,
    name,
    email,
    gender,
  };
  users.push(newUser);
  return { ...newUser };
}

export async function deleteUser(id: number) {
  await randomDelay();
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    throw new Error("User not found");
  }
  users.splice(index, 1);
  return { success: true };
}

export async function updateUser(
  id: number,
  name: string,
  email: string,
  gender: string
) {
  await randomDelay();
  const user = users.find((u) => u.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  user.name = name;
  user.email = email;
  user.gender = gender;
  return { ...user };
}
