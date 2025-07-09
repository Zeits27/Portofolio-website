// components/Contact.jsx
import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="py-12 px-6 bg-[#233454] text-white">
      <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
      <form className="grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded bg-white text-[#3E4343] placeholder:text-[#3E4343]"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded bg-white text-[#3E4343] placeholder:text-[#3E4343]"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="p-3 rounded bg-white text-[#3E4343] placeholder:text-[#3E4343]"
        />
        <button
          type="submit"
          className="bg-[#D4494C] text-white font-semibold py-2 rounded hover:bg-[#b53b3d]"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
