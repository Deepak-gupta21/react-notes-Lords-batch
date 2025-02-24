import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
