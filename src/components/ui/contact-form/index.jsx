import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "918459124200";
    const whatsappMessage = `Name: ${formData.fullName}%0aPhone: ${formData.phone}%0aEmail: ${formData.email}%0aMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.location.href = whatsappURL;
  };

  return (
    <motion.div
      // style={{ border: "2px solid #76173c" }}
      className="grid md:grid-cols-2 items-center overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-2xl mx-3 bg-white font-[sans-serif]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="sm:p-10 max-sm:px-4 max-sm:mx-2 max-sm:py-5 bg-[#232323]">
        <motion.h2
          className="text-3xl font-extrabold text-white"
          variants={itemVariants}
        >
          Get In <span className="text-[#e9c146]">Touch</span>
        </motion.h2>
        <motion.p
          className="text-sm text-[#d47677] mt-3"
          variants={itemVariants}
        >
          Join us in sharing the irresistible flavors of biryani with your city
        </motion.p>
        <motion.form onSubmit={handleSubmit} variants={itemVariants}>
          <div className="space-y-4 mt-8">
            <motion.input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              required
              variants={itemVariants}
            />

            <motion.input
              type="number"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              required
              variants={itemVariants}
            />

            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="px-2 py-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              required
              variants={itemVariants}
            />

            <motion.textarea
              name="message"
              placeholder="Write Message"
              value={formData.message}
              onChange={handleChange}
              className="px-2 pt-3 bg-transparent text-white w-full text-sm border-b border-gray-400 focus:border-white outline-none"
              rows={5}
              required
              variants={itemVariants}
            ></motion.textarea>
          </div>
          <motion.button
            type="submit"
            className="mt-8 flex items-center justify-center text-sm w-full rounded px-4 py-2.5 font-semibold bg-[#e9c146] text-[#232323] hover:bg-yellow-700"
            variants={itemVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#232323"
              className="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fillRule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </svg>
            Send Message
          </motion.button>
        </motion.form>
        <motion.ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
          <motion.li
            className="flex items-center text-yellow-500"
            variants={itemVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              />
            </svg>
            <a
              href="mailto:info@biryaan.in"
              className="text-current text-sm ml-3"
            >
              <strong>info@biryaan.in</strong>
            </a>
          </motion.li>
          <motion.li
            className="flex items-center text-yellow-500"
            variants={itemVariants}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="currentColor"
              viewBox="0 0 482.6 482.6"
            >
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.
                -11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000"
              ></path>
            </svg>
            <a href="tel:+918459124200" className="text-current text-sm ml-3">
              <strong>+91-8459124200</strong>
            </a>
          </motion.li>
        </motion.ul>
      </div>
      <div className="z-10 relative h-full max-md:min-h-[350px] max-md:p-5">
        <motion.iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.2471983167197!2d79.06478597435716!3d21.102708685236287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf7d0747fb8d%3A0x3f34fca6960af98d!2sBiryaan%20Biryani!5e0!3m2!1sen!2sin!4v1715799152553!5m2!1sen!2sin"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="left-0 top-0 h-full w-full rounded-tr-lg rounded-br-lg lg:rounded-tr-none lg:rounded-bl-lg"
          variants={itemVariants}
        ></motion.iframe>
      </div>
    </motion.div>
  );
}
