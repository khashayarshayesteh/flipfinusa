import {
  ArrowRight,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/FI1.png";
import InstallationVideo from "../components/sections/InstallationVideo";

const Home = () => {
  const features = [
    {
      icon: Compass,
      title: "Improved Tracking",
      description:
        "Designed to help your paddle board stay on course and provide better control on the water.",
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description:
        "A practical installation system that allows paddle board owners to attach the fin with confidence.",
    },
    {
      icon: ShieldCheck,
      title: "Durable Construction",
      description:
        "Built for dependable use with materials selected for strength, stability, and outdoor conditions.",
    },
  ];

  const productBenefits = [
    "Designed specifically for paddle boards",
    "Simple installation process",
    "Improves stability, tracking, and control",
    "Durable design for regular outdoor use",
  ];

  return (
    <>
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-slate-950 px-6 pb-24 pt-36 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.28),_transparent_42%)]" />

        <div className="absolute -bottom-64 -right-52 h-[650px] w-[650px] rounded-full border border-sky-400/20" />

        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">
              <Waves size={18} />
              Paddle Board Fin System
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Upgrade your paddle board performance
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Experience improved tracking, greater stability, and a simple
              installation process with the FlipFin paddle board fin system.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#installation"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Watch Installation
                <ArrowRight size={19} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact FlipFin USA
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {productBenefits.slice(0, 2).map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-sky-400"
                  />
                  <span className="text-sm leading-6 text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-8 rounded-full bg-sky-500/10 blur-3xl" />

            <img
              src={heroImage}
              alt="Paddle board rider using a fin installed under the board"
              className="relative z-10 w-full max-w-4xl rounded-3xl object-cover shadow-2xl shadow-sky-950/40 transition duration-500 hover:scale-[1.015]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Product Benefits
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Designed for better performance on the water
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              FlipFin gives paddle board owners a dependable fin solution that
              is practical, durable, and easy to install.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-950">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="installation" className="scroll-mt-24">
        <InstallationVideo />
      </div>

      <section className="bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              About FlipFin USA
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              Created for paddle board owners
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              FlipFin USA focuses on creating a dependable paddle board fin
              solution that is easy to understand, easy to install, and ready
              for use on the water.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our goal is to help paddlers improve control and tracking without
              making the installation process complicated.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-700 transition hover:text-sky-800"
            >
              Learn more about FlipFin USA
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl bg-slate-950 p-9 text-white shadow-xl sm:p-12">
            <Waves size={50} className="text-sky-400" />

            <h3 className="mt-6 text-3xl font-bold">
              Made for confident paddling
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              A dependable fin supports smoother tracking and better control,
              helping paddlers enjoy a more stable experience on lakes, rivers,
              and coastal waters.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {productBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <span className="leading-7 text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-500 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Ready to learn more about FlipFin?
            </h2>

            <p className="mt-3 text-lg text-sky-50">
              Contact FlipFin USA for product information, availability, and
              installation questions.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;