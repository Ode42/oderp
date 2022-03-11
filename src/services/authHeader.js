const authHeader = () => {
  const token = sessionStorage.getItem("token");
  const isLoggedIn = !!token;
  if (!isLoggedIn) {
    return {
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {};
  }
};

export default authHeader;
