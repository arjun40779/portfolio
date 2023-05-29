import React from "react";

const RegPage = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h2>Chit Chat</h2>
        <p>Register</p>
        <form action="">
          <input type="text" placeholder="Display name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <i class="fa-solid fa-image fa-lg"></i>
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? sign in</p>
      </div>
    </div>
  );
};

export default RegPage;
