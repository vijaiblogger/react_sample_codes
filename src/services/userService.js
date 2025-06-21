// services/userService.js

const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchUsers() {
  const response = await fetch(`${API_BASE}/users`); 
  if (!response.ok) throw new Error('Failed to fetch users');
  console.log(response);
  return await response.json();
}

export async function fetchUserById(id) {
  const response = await fetch(`${API_BASE}/users/${id}`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return await response.json();
}
