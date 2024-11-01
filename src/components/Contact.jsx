import { useState } from "react";
import Joi from "joi-browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.string().label("Phone"),
    email: Joi.string().email().required().label("Email"),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  };

  const validateField = (name, value) => {
    const fieldSchema = { [name]: schema[name] };
    const { error } = Joi.validate({ [name]: value }, fieldSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the field changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch(
        "https://getform.io/f/1e5ad879-e6da-455b-9aff-7aaf76200ee7",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div id="contact" className="max-w-screen-xl mx-auto p-5 pt-16 md:px-16">
      <h1 className="text-4xl font-bold text-center text-white my-5">
        Contact
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="uppercase text-sm text-white">Name</label>
            <input
              className="rounded-lg p-3 bg-slate-200 text-black outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="flex flex-col">
            <label className="uppercase text-sm text-white">Phone</label>
            <input
              className="rounded-lg p-3 bg-slate-200 text-black outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="uppercase text-sm text-white">Email</label>
            <input
              className="rounded-lg p-3 bg-slate-200 text-black outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="flex flex-col">
            <label className="uppercase text-sm text-white">Subject</label>
            <input
              className="rounded-lg p-3 bg-slate-200 text-black outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>

        <div className="flex flex-col mb-4">
          <label className="uppercase text-sm text-white">Message</label>
          <textarea
            className="rounded-lg p-3 bg-slate-200 text-black outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
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
          className="bg-blue-500 text-white mt-4 w-full p-4 rounded-lg hover:bg-blue-600 transition"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
