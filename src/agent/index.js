const config = (enteredEmail, enteredPassword) => ({
  method: "POST",
  body: JSON.stringify({
    email: enteredEmail,
    password: enteredPassword,
    returnSecureToken: true,
  }),
  header: {
    "Content-Type": "application/json",
  },
});

const AuthRequest = {
  post: (url, email, password) =>
    fetch(url, config(email, password)).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Authentication Failed!");
      }
    }),
};

const auth = {
  signin: (url, email, password) => AuthRequest.post(url, email, password),
};

export { auth };
