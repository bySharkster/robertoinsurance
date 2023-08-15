import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export const ContactMe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_l2wcdht',
        'template_9qmeczr',
        {
          from_name: form.name,
          to_name: '',
          from_email: form.email,
          to_email: 'fernandoaponte0609@gmail.com',
          message: form.message,
        },
        'Qg9lalc1QLU_5DHIT',
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
        },
      );
  };

  const containerVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 } };

  return (
    <div className="bg-blue-900">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-32">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl py-8">Contact</h1>
        <p className="text-white text-lg sm:text-2xl md:text-3xl pb-4">
          If you have any questions, please feel free to contact me.
        </p>
        <div className="flex justify-center sm:justify-start">
          <div className="hidden sm:block card">
            <div className="mt-4">
              <img
                src="/img/meNFT.png"
                width="100px"
                height="100px"
                className="rounded-10"
                alt="spicy chicken"
              />
            </div>
            <span className="text-xl text-gray-700">About Me</span>
            <p className="text-gray-700">
              I'm Gregor, a designer who focuses on telling my clients' stories visually, through enjoyable and meaningful experiences. I specialize in 3d design and full stack software engineering.
            </p>
          </div>
        </div>
        <div className="border-b mt-4 mb-8 border-white" />
      </div>
      <div className="relative z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              transition={{ duration: 0.6 }}
              className="pb-12 md:pb-0"
            >
              <div className="flex justify-center md:justify-start mt-12 md:mt-0">
                <div className="p-8 bg-gray-100 shadow-lg rounded-xl md:w-80">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <label className="block text-gray-700 font-bold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Dope"
                      className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                    />

                    <label className="block mt-4 text-gray-700 font-bold mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@gmail.com"
                      className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                    />

                    <label className="block mt-4 text-gray-700 font-bold mb-2">Your Message</label>
                    <textarea
                      rows="7"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Hi Gregor!"
                      className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                    />

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
            <div className="hidden md:block">
              <div className="p-8 bg-gray-100 shadow-lg rounded-xl">
                <div className="flex justify-center md:justify-start">
                  <div className="mt-4">
                    <img
                      src="/img/meNFT.png"
                      width="100px"
                      height="100px"
                      className="rounded-10"
                      alt="spicy chicken"
                    />
                  </div>
                  <span className="text-xl text-gray-700">About Me</span>
                  <p className="text-gray-700">
                    I'm Gregor, a designer who focuses on telling my clients' stories visually, through enjoyable and meaningful experiences. I specialize in 3d design and full stack software engineering.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
