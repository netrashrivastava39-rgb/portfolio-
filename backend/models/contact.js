import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully! 🚀");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setStatus(data.message);
      }

    } catch (error) {
      console.error(error);
      setStatus("Unable to connect to server.");
    }
  };

  return (
    <section className="section contact" id="contact">

      <h2 className="section-title">
        Let's Connect
      </h2>

      <p>
        Interested in working together or just want
        to say hello?
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

      {status && (
        <p>{status}</p>
      )}

    </section>
  );
}

export default Contact;