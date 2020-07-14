import { URL } from "../_constants";

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true); // обновление полное (начиная с сервера)
      }

      const error = (data && data.errors) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: { email:email.toLowerCase(), password } }),
  };
  return fetch(`${URL}users/login`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
    redirect: "follow",
  };
  return fetch(`${URL}users`, requestOptions).then(handleResponse);
}

export const userService = {
  login,
  logout,
  register,
};
