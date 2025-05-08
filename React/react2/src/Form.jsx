import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({fullName: "", username: "", password: ""});

  let handleInputChange = (event) => {
    setFormData((currData) => {
        return {...currData, [event.target.name]: event.target.value};
    })
  }
  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({fullName: "", username: "", password: ""});
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName : </label>
      <input
        id="fullName"
        name="fullName"
        placeholder="Enter your name"
        style={{ height: 35, width: 200 }}
        onChange={handleInputChange}
        value={formData.fullName}
      />
      <br /><br /> 
      <label htmlFor="username">UserName : </label>
      <input
        id="username"
        name="username"
        placeholder="Enter username"
        style={{ height: 35, width: 200 }}
        onChange={handleInputChange}
        value={formData.username}
      />
      <br /><br />
      <label htmlFor="password">Password : </label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        style={{ height: 35, width: 200 }}
        onChange={handleInputChange}
        value={formData.password}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
