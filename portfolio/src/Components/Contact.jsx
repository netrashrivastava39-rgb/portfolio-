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
        Let's Connect ✦
      </h2>

      <p>
        Interested in working together or just want
        to say hello?
      </p>


      {/* CONTACT FORM */}

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


      {/* STATUS MESSAGE */}

      {status && (
        <p>{status}</p>
      )}


      {/* SOCIAL LINKS */}

      <div className="contact-links">

        <a href="mailto:netrashrivastava39@gmail.com">
          ✉ Email
        </a>

        <a
          href="https://github.com/netrashrivastava39-rgb"
          target="_blank"
          rel="noreferrer"
        >
          ↗ GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/netra-shrivastava-a7564a360"
          target="_blank"
          rel="noreferrer"
        >
          ↗ LinkedIn
        </a>

      </div>

    </section>
  );
}

export default Contact;