const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const getUserBalance = state => state.auth.user.balance;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getUserName,
  getIsRefreshingUser,
  getUserBalance,
  getToken,
};

export default authSelectors;
