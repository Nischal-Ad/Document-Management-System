import React from "react";

const SignUp = () => {
  return (
    <div class="card">
      <h3>Sign Up</h3>
      <div class="card-body">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Username:
          </label>
          <input type="username" class="form-control" id="example" />
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
          <label for="confirmpassword" class="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="password"
            class="form-control"
            aria-labelledby="password"
          />
          <label for="exampleFormControlInput1" class="form-label">
            Address:
          </label>
          <input type="address" class="form-control" id="example" />
          <button type="button" class="btn btn-outline-primary">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
