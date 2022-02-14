const getIsLoggedIn = (state) => state.auth.isLoggedIn;

const getUsername = (state) => state.auth.user.name;
const isLoading = (state) => state.auth.isLoading;
const getAuthError = (state) => state.auth.error;
const getToken = (state) => state.auth.token;
const getBalance = (state) => state.auth.balance;
const getAvatar = (state) => state.auth.avatarUrl;
const getUserEmail = (state) => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  isLoading,
  getAuthError,
  getToken,
  getBalance,
  getAvatar,
  getUserEmail,
};
export default authSelectors;
