import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_iyatkbw",   // Replace with your Service ID
        "template_tjrbec4",  // Replace with your Template ID
        form.current,
        "LblXCRPYutmykbfqU"    // Replace with your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Something went wrong ❌ Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-br from-indigo-100 via-white to-indigo-200"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Get In <span className="text-indigo-600">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let’s connect!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Social Links */}
          <div className="flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Connect With Me
            </h3>
            <div className="flex space-x-8 justify-center text-4xl">
              <a
                href="https://github.com/12usama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-usama-alam-ridwane-376b3a1a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:usamaalam3999@gmail.com"
                className="text-red-500 hover:text-red-700 transition transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/90 rounded-2xl shadow-xl p-10 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Me a Message
            </h3>

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 font-medium disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="mt-3 text-sm text-gray-700">{success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
