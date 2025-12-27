interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
}

export function getUsers(): Record<string, User> {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem("users");
  return stored ? JSON.parse(stored) : {};
}

export function saveUsers(users: Record<string, User>) {
  if (typeof window === "undefined") return;
  localStorage.setItem("users", JSON.stringify(users));
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  const userId = localStorage.getItem("currentUserId");
  if (!userId) return null;
  const users = getUsers();
  return users[userId] || null;
}

export function setCurrentUser(userId: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem("currentUserId", userId);
}

export function logout() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("currentUserId");
}

export function loginUser(email: string, password: string): User | null {
  const users = getUsers();
  const user = Object.values(users).find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    setCurrentUser(user.id);
  }
  return user || null;
}

export function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
): User {
  const users = getUsers();
  const userId = `user_${Date.now()}`;
  const newUser: User = {
    id: userId,
    firstName,
    lastName,
    email,
    password,
    createdAt: new Date().toISOString(),
  };
  users[userId] = newUser;
  saveUsers(users);
  setCurrentUser(userId);
  return newUser;
}
