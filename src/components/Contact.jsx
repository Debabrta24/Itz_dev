import React, { useState } from "react";

import emailjs from "@emailjs/browser";

import {
  Mail,
  Send,
  User,
  MessageSquare,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

/* ENV */

const tempOne = import.meta.env.VITE_TEMP_ONE;
const tempTwo = import.meta.env.VITE_TEMP_TWO;

const serviceOne =
  import.meta.env.VITE_SERVCES_ONE;

const serviceTwo =
  import.meta.env.VITE_SERVCES_TWO;

function Contact() {
  const [loading, setLoading] =
    useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /* INPUT */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* SHOW TOAST */

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  /* SUBMIT */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      /* SEND TO YOU */

      await emailjs.send(
        serviceOne,
        tempOne,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "wkJCuBsMxji_ZiOwQ"
      );

      /* AUTO REPLY */

      await emailjs.send(
        serviceTwo,
        tempTwo,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "wkJCuBsMxji_ZiOwQ"
      );

      /* SUCCESS */

      showToast(
        "success",
        "Message Sent Successfully!"
      );

      /* RESET */

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      /* ERROR */

      showToast(
        "error",
        "Failed To Send Message"
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-4
        py-20
        bg-white
        dark:bg-[#0a0a0a]
        transition-colors
        duration-500
      "
    >
      {/* TOAST */}

      {toast.show && (
        <div
          className={`
            fixed
            top-6
            right-6
            z-[9999]
            flex
            items-center
            gap-3
            px-5
            py-4
            rounded-2xl
            shadow-2xl
            backdrop-blur-xl
            border
            animate-[slideIn_.4s_ease]
            ${
              toast.type === "success"
                ? "bg-green-500/10 border-green-500/20 text-green-500"
                : "bg-red-500/10 border-red-500/20 text-red-500"
            }
          `}
        >
          {toast.type === "success" ? (
            <CheckCircle2 size={22} />
          ) : (
            <XCircle size={22} />
          )}

          <p className="font-medium text-sm sm:text-base">
            {toast.message}
          </p>
        </div>
      )}

      {/* BACKGROUND */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADING */}

        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Let’s Work Together
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
            Let’s collaborate to build modern websites,
            AI projects and IoT solutions together.
          </p>
        </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}

          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[350px] h-[350px]">
              <div className="absolute inset-0 rounded-full border-4 border-orange-500/20 animate-pulse"></div>

              <div className="absolute inset-10 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white dark:bg-[#111] shadow-2xl">
                <div className="text-center">
                  <Mail
                    size={70}
                    className="text-orange-500 mx-auto mb-4"
                  />

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Contact Me
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                    Fast Response
                    <br />
                    Modern Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="
              bg-[#f8f8f8]
              dark:bg-[#111111]
              border
              border-black/10
              dark:border-white/10
              rounded-3xl
              p-6
              sm:p-10
              shadow-2xl
              space-y-6
            "
          >
            {/* NAME */}

            <div>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Your Name
              </label>

              <div className="flex items-center bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-4">
                <User
                  size={18}
                  className="text-orange-500"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    px-3
                    py-4
                    text-gray-900
                    dark:text-white
                  "
                />
              </div>
            </div>

            {/* EMAIL */}

            <div>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Email Address
              </label>

              <div className="flex items-center bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-4">
                <Mail
                  size={18}
                  className="text-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    px-3
                    py-4
                    text-gray-900
                    dark:text-white
                  "
                />
              </div>
            </div>

            {/* MESSAGE */}

            <div>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Message
              </label>

              <div className="flex bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-4 py-3">
                <MessageSquare
                  size={18}
                  className="text-orange-500 mt-1"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    px-3
                    text-gray-900
                    dark:text-white
                    resize-none
                  "
                ></textarea>
              </div>
            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-gradient-to-r
                from-orange-500
                to-amber-500
                hover:opacity-90
                disabled:opacity-70
                transition-all
                duration-300
                py-4
                rounded-xl
                font-semibold
                flex
                items-center
                justify-center
                gap-2
                text-white
                shadow-lg
              "
            >
              {loading ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={18}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;