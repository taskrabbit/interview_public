export const CONNECTION_ERROR = "CONNECTION_ERROR";
export const VALIDATION_ERROR = "VALIDATION_ERROR";

const TIMEOUT = 1000;
const USER = {
  name: "Marty McFly",
  email: "mcfly85@example.com",
  userType: "new", // list of types: ["new", "active", "inactive", "elite"]
};

const Auth = {
  login({ username, password }) {
    return new Promise((resolve, reject) =>
      setTimeout(function() {
        if (username === "" || password === "") {
          return reject(new Error(VALIDATION_ERROR));
        } else if (username === "z" && password === "z") {
          return reject(new Error(CONNECTION_ERROR));
        }
        resolve(USER);
      }, TIMEOUT)
    );
  }
};

export default Auth;
