
export const TOKEN_ID = "id";
export const authOK = () => localStorage.getItem(TOKEN_ID) !== null;
export const getToken = () => localStorage.getItem(TOKEN_ID);
export const login = (token) => localStorage.setItem(TOKEN_ID, token);
export const logout = () => localStorage.removeItem(TOKEN_ID);
