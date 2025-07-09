// components/Project.jsx
import React from 'react';

const projects = [
  { title: 'Project 1', desc: 'Description', img: '/placeholders/project1.png' },
  { title: 'Project 2', desc: 'Description', img: '/placeholders/project2.png' },
  { title: 'Project 3', desc: 'Description', img: '/placeholders/project3.png' },
];

export function Project() {
  return (
    <section id='project' className="min-h-screen py-12 px-6 bg-[#B2D9DB] text-[#3E4343]">
      <h2 className="text-3xl font-bold text-[#233454] mb-6 flex justify-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div key={idx} className="bg-[#B2D9DB] rounded-xl shadow p-4">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
