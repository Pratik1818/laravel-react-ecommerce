// src/utils/auth.js
export const isLoggedIn = () => {
  return !!localStorage.getItem("token"); // true if token exists
};

export const logout = () => {
  localStorage.removeItem("token"); // clear session
  window.location.href = "/login"; // redirect after logout
};
