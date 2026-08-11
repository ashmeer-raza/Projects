// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto max-w-4xl text-center space-y-8 w-full">
      <h2 className="text-sm font-semibold tracking-[0.3em] text-zinc-400 uppercase">
        // Get In Touch
      </h2>
      <h3 className="font-ticdar text-5xl sm:text-7xl font-black text-white">
        Let's Build Something Together
      </h3>
      <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
        I am currently looking for new opportunities. Whether you have a
        question or just want to say hi, my inbox is always open!
      </p>

      <div className="pt-4 flex justify-center gap-4">
        <a
          href="mailto:ashmeer.me@gmail.com"
          className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-95"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
