import React, { useState } from "react";
import Card from "./Card";

function FormState() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Card>
      <form id="info-form" onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" id="full_name" value={formData.fullName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" id="password_confirmation" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default FormState;
