import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { Mail, X, Download, Loader2, CheckCircle2, XCircle } from "lucide-react";
import photo from "../data/photo.png";
import pdf from "../data/Debabrata Paul.pdf";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !validateEmail(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate high-quality API submission delay
    setTimeout(() => {
      try {
        const cvDownloads = JSON.parse(localStorage.getItem("cv_downloads") || "[]");
        cvDownloads.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem("cv_downloads", JSON.stringify(cvDownloads));
      } catch (err) {
        console.error(err);
      }

      // Trigger download
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "Debabrata_Paul_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast("success", "Thank you for downloading my CV!");
      setIsSubmitting(false);
      setIsModalOpen(false);
      setEmail("");
    }, 850);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-16"
    >
      {/* LEFT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-lg text-gray-600 dark:text-gray-400">Hi I am</p>

        <h1 className="text-orange-500 font-bold text-3xl sm:text-4xl mt-2">
          Debabrata Paul
        </h1>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight text-gray-900 dark:text-white">
          Software <br />
          Engineer
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-2xl">
          Hi, I’m Debabrata Paul — a passionate developer skilled in Web
          Development, App Development, IoT, and UI/UX Design.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] transition-all px-8 py-4 rounded-2xl text-white font-semibold shadow-lg cursor-pointer flex items-center justify-center gap-2 mx-auto lg:mx-0"
        >
          <Download className="w-5 h-5" />
          <span>Download CV</span>
        </button>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-30 rounded-full"></div>

          <div className="relative bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-full w-72 h-72 sm:w-80 sm:h-80 overflow-hidden shadow-2xl">
            {/* IMAGE */}
            <img src={photo} alt="" />
          </div>
        </div>

        {/* MAIL */}
        <div className="flex gap-2">
          <a
            href="mailto:help.devapps@gmail.com"
            className="mt-6 flex items-center gap-3 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 px-2 py-1 rounded-2xl hover:scale-105 transition"
          >
            <Mail className="text-orange-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/debabrata2024"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-3 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 px-2 py-1 rounded-2xl hover:scale-105 transition"
          >
            <CiLinkedin size={28} className="text-orange-500" />
          </a>
        </div>
      </div>

      {/* CV DOWNLOAD MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Card */}
          <div className="relative bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl z-10 transform transition-all duration-300 scale-100 animate-[scaleIn_0.3s_ease]">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Download CV
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Please enter your email address to download the curriculum vitae.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleDownloadSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block mb-2 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="flex items-center bg-gray-50 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 rounded-xl px-4 focus-within:ring-2 focus-within:ring-orange-500 transition-all">
                  <Mail className="text-orange-500 shrink-0 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent outline-none px-3 py-3.5 text-gray-900 dark:text-white text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 disabled:opacity-75 transition-all duration-300 py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-white shadow-lg shadow-orange-500/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Preparing PDF...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Get Curriculum Vitae
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div
          className={`fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border animate-[slideIn_0.4s_ease] ${
            toast.type === "success"
              ? "bg-green-500/10 border-green-500/20 text-green-500"
              : "bg-red-500/10 border-red-500/20 text-red-500"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5.5 h-5.5" />
          ) : (
            <XCircle className="w-5.5 h-5.5" />
          )}
          <p className="font-medium text-sm sm:text-base">{toast.message}</p>
        </div>
      )}
    </section>
  );
};

export default Hero;
