import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import { MdSubject } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.15);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const inputClass =
    "w-full p-3 pl-10 rounded-xl text-white border focus:outline-none focus:border-purple-500 transition-colors duration-200 text-sm";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    borderColor: "rgba(130,69,236,0.25)",
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div
        ref={sectionRef}
        className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you — reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form Card */}
      <div
        className={`glass-card w-full max-w-lg p-8 rounded-2xl transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-xl font-semibold text-white text-center mb-6">
          Connect With Me{" "}
          <span
            className="ml-1 inline-block animate-bounce"
            style={{ display: "inline-block" }}
          >
            🚀
          </span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4"
        >
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          {/* Subject */}
          <div className="relative">
            <MdSubject className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          {/* Message */}
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-purple-400" />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className={`${inputClass} pl-10 resize-none`}
              style={inputStyle}
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
              isSending ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 hover:scale-[1.02]"
            }`}
            style={{
              background: "linear-gradient(135deg, #8245ec, #a855f7)",
              boxShadow: "0 0 20px rgba(130,69,236,0.4)",
            }}
          >
            <FiSend size={18} />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
