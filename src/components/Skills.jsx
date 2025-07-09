import React, { useState } from 'react';

const categories = {
  'Programming Language': [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ],
  'Framework': [
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  ],
  'Tools': [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  ],
};

export function Skills() {
  const [active, setActive] = useState('Programming Language');

  return (
    <section 
      id="skill"
      className="min-h-50 justify-center bg-gradient-to-b from-[#F3FAEF] to-[#B2D9DB] px-6 md:px-20 pt-12 pb-10"
    >
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
      `}</style>
      
      <h2 className="text-3xl font-bold text-slate-700 mb-6 flex justify-center">Skills</h2>
      
      <div className="flex gap-4 mb-6 justify-center flex-wrap">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              active === key
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 border border-blue-400'
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {categories[active].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-24 h-24 hover:animate-bounce cursor-pointer transition-transform hover:scale-105"
            style={{
              animation: `float ${2 + idx * 0.1}s ease-in-out infinite alternate`
            }}
          >
            <img 
              src={item.icon} 
              alt={item.name}
              className="w-12 h-12 mb-2 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div 
              className="w-12 h-12 mb-2 bg-gray-200 rounded flex items-center justify-center text-gray-600 text-xs font-bold hidden"
            >
              {item.name.substring(0, 2)}
            </div>
            <p className="text-xs font-medium text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}