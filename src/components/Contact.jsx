import React, { useState } from "react";
const env = required("dot-env");
import emailjs from "@emailjs/browser";

import { Mail, Send, User, MessageSquare } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // INPUT HANDLE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // SEND MAIL
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.SERVCES_ONE,
        process.env.TEMP_ONE,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "wkJCuBsMxji_ZiOwQ",
      );

      await emailjs.send(
      process.env.SERVCES_TWO,
        process.env.TEMP_TWO,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "wkJCuBsMxji_ZiOwQ",
      );

      alert("Message Sent Successfully!");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert("Failed To Send Message");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 sm:py-24 bg-black text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Let’s Work Together
          </h1>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Let’s collaborate to build modern websites, AI projects, and IoT
            solutions together.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT GRAPHIC */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[350px] h-[350px]">
              <div className="absolute inset-0 rounded-full border-4 border-orange-500/20 animate-pulse"></div>

              <div className="absolute inset-10 rounded-full border-4 border-orange-500 flex items-center justify-center">
                <div className="text-center">
                  <Mail size={70} className="text-orange-500 mx-auto mb-4" />

                  <h2 className="text-2xl font-bold">Contact Me</h2>

                  <p className="text-gray-400 mt-2 text-sm">
                    Fast Response <br />
                    Modern Solutions
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-10 w-4 h-4 bg-orange-500 rounded-full animate-bounce"></div>

              <div className="absolute bottom-10 left-8 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] border border-[#222] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
          >
            {/* NAME */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Your Name
              </label>

              <div className="flex items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4">
                <User size={18} className="text-orange-500" />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email Address
              </label>

              <div className="flex items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4">
                <Mail size={18} className="text-orange-500" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none px-3 py-4 text-white"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>

              <div className="flex bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3">
                <MessageSquare size={18} className="text-orange-500 mt-1" />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent outline-none px-3 text-white resize-none"
                ></textarea>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
