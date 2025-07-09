// components/Home.jsx
import React from 'react';
import MyPhoto from '../assets/me.jpg';
export function Home() {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex items-center justify-center bg-[#F3FAEF] px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-16 pt-1">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-left">
          <p className="text-2xl font-semibold text-[#233454]">Hello! I am</p>
          <h1 className="text-6xl font-extrabold text-[#D4494C] leading-tight">
            Laurentius Nicholas
          </h1>
          <p className="text-lg max-w-lg text-[#527A9A] leading-relaxed">
            Currently diving deep into AI and software engineering, always curious and building.
          </p>
          <a
            className="inline-block mt-4 px-11 py-6 bg-[#233454] text-white text-base font-bold"
          >
            About me
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[280px] h-[380px] overflow-hidden rounded-t-[140px] shadow-xl">
            <img
              src={MyPhoto}
              alt="Profile"
              className="w-full h-full object-cover translate-y-[190px] translate-x-[-25px] transform scale-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
