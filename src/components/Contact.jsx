import { useState } from "react";
// import Joi from "joi-browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // const schema = {
  //   name: Joi.string().required().label("Name"),
  //   phone: Joi.string().label("Phone"),
  //   email: Joi.string().email().required().label("Email"),
  //   subject: Joi.string().required().label("Subject"),
  //   message: Joi.string().required().label("Message"),
  // };

  // const validateField = (name, value) => {
  //   const fieldSchema = { [name]: schema[name] };
  //   const { error } = Joi.validate({ [name]: value }, fieldSchema);
  //   return error ? error.details[0].message : null;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the field changes
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newErrors = {};
  //   Object.keys(formData).forEach((key) => {
  //     const error = validateField(key, formData[key]);
  //     if (error) newErrors[key] = error;
  //   });

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }

  //   // Handle form submission logic here
  //   // For example, you can send the form data to your server

  //   // Reset form after successful submission
  //   setFormData({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  //   setErrors({});
  // };

  return (
    <div id="contact" className="max-w-screen-xl mx-auto p-4 py-16  md:pl-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
      <form
        action="https://getform.io/f/1e5ad879-e6da-455b-9aff-7aaf76200ee7"
        method="POST"
        // onSubmit={handleSubmit}
      >
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Name</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Phone</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject}</span>
          )}
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows={10}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>

        <button
          className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
