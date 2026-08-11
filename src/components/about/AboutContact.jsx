import { ArrowUpRight } from "lucide-react";

const AboutContact = () => {
  return (
    <section className="about-contact px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="contact-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-16 sm:px-16 sm:py-24">
          <div className="contact-glow pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[100px]" />

          <p className="relative mb-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
            04 / Let's Connect
          </p>

          <h2 className="contact-heading relative max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-zinc-600">Let's build it.</span>
          </h2>

          <div className="relative mt-12 flex flex-col gap-5 sm:flex-row">
            <a
              href="mailto:ashmeer.me@gmail.com"
              className="magnetic-button inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-transform duration-300"
            >
              Get in touch
              <span>
                <ArrowUpRight />
              </span>
            </a>

            <a
              href="tel:+917722017202"
              className="inline-flex w-fit items-center rounded-full border border-white/10 px-7 py-4 text-sm text-zinc-300 transition hover:bg-white/5"
            >
              +91 77220 17202
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
