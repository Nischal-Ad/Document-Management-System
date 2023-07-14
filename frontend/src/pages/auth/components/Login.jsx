import React from "react";

const Login = () => {
  return (
    <div class="card">
      <div class="card-body">
        <h3>Login</h3>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address:
          </label>
          <input type="email" class="form-control" id="example" />
          <label for="Password" class="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            class="form-control"
            aria-labelledby="password"
          />
          <button type="button" class="btn btn-outline-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
