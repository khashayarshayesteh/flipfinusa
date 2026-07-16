import {
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/FI1.png";
import InstallationVideo from "../components/sections/InstallationVideo";

const purchaseUrl = "/contact";

const Home = () => {
  const features = [
    {
      icon: RotateCcw,
      title: "Flip It Under the Board",
      description:
        "Flip the fin into its transport position instead of removing it after every paddle boarding trip.",
    },
    {
      icon: Truck,
      title: "Easier Transportation",
      description:
        "Carry, store, and transport your paddle board more easily while helping protect the fin from damage.",
    },
    {
      icon: Wrench,
      title: "Install It Once",
      description:
        "Complete the initial installation, then use the flipping mechanism whenever you need to transport the board.",
    },
  ];

  const flipFinBenefits = [
    "Flip the fin underneath the paddle board",
    "Avoid removing and reinstalling the fin every trip",
    "Make transportation and storage easier",
    "Help protect the fin while carrying the board",
  ];

  const includedItems = [
    "FlipFin paddle board fin system",
    "Required mounting hardware",
    "Installation video and instructions",
    "Shipping within the United States",
    "Secure hosted checkout",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-slate-950 px-6 pb-24 pt-36 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.3),_transparent_42%)]" />

        <div className="absolute -bottom-64 -right-52 h-[650px] w-[650px] rounded-full border border-sky-400/20" />

        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">
              <Waves size={18} />
              The Flipping Paddle Board Fin
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Flip your fin.
              <span className="block text-sky-400">Carry your board.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              FlipFin folds underneath your paddle board to make carrying,
              transportation, and storage easier—without removing the fin
              every time.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#order"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Buy FlipFin — $39.99
                <ArrowRight size={19} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Watch How It Works
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {flipFinBenefits.slice(0, 2).map((benefit) => (
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
              alt="Paddle board with a FlipFin mounted underneath the board"
              className="relative z-10 w-full max-w-4xl rounded-3xl object-cover shadow-2xl shadow-sky-950/40 transition duration-500 hover:scale-[1.015]"
            />
          </div>
        </div>
      </section>

      {/* Why FlipFin */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Why FlipFin?
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Stop removing your paddle board fin after every trip
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Traditional fins may need to be removed before transporting or
              storing the paddle board. FlipFin gives you a simpler option:
              flip the fin underneath the board and move on.
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

      {/* Order section */}
      <section
        id="order"
        className="scroll-mt-24 bg-sky-50 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
            <img
              src={heroImage}
              alt="FlipFin Paddle Board Fin System"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Order Online
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              FlipFin Paddle Board Fin System
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Install FlipFin once, then flip the fin underneath your paddle
              board whenever you need to carry, transport, or store it.
            </p>

            <div className="mt-8 flex items-end gap-3">
              <p className="text-5xl font-bold text-slate-950">$39.99</p>
              <p className="pb-1 text-slate-500">per system</p>
            </div>

            <div className="mt-5 rounded-xl border border-sky-200 bg-white p-5 shadow-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Product</span>
                <span className="font-semibold text-slate-950">$39.99</span>
              </div>

              <div className="mt-3 flex justify-between gap-4">
                <span className="text-slate-600">U.S. shipping</span>
                <span className="font-semibold text-slate-950">$9.99</span>
              </div>

              <div className="mt-4 flex justify-between gap-4 border-t border-slate-200 pt-4">
                <span className="font-bold text-slate-950">
                  Total before applicable tax
                </span>
                <span className="font-bold text-slate-950">$49.98</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {includedItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-sky-600"
                    size={21}
                  />

                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            {purchaseUrl.startsWith("http") ? (
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-sky-600"
              >
                Buy FlipFin — $39.99
                <ArrowRight size={20} />
              </a>
            ) : (
              <Link
                to={purchaseUrl}
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-sky-600"
              >
                Order FlipFin — $39.99
                <ArrowRight size={20} />
              </Link>
            )}

            <p className="mt-4 text-sm leading-6 text-slate-500">
              $9.99 shipping within the United States. Applicable sales tax may
              be added during checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Before and after */}
      <section className="bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              A Simpler Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Remove and reinstall—or simply flip
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                Traditional Fixed Fin
              </p>

              <h3 className="mt-4 text-3xl font-bold text-slate-950">
                More steps before transportation
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Remove the fin from the paddle board",
                  "Keep the fin and hardware together",
                  "Carry the fin separately",
                  "Reinstall it before the next trip",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <p className="text-sm font-bold uppercase tracking-widest text-sky-400">
                With FlipFin
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                Flip. Carry. Paddle.
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Flip the fin underneath the board",
                  "Carry or transport the paddle board",
                  "Return the fin to its paddling position",
                  "Get back on the water",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-1 shrink-0 text-sky-400"
                    />

                    <p className="leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Video */}
      <div id="how-it-works" className="scroll-mt-24">
        <InstallationVideo />
      </div>

      {/* Product story */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Designed for Convenience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
              A paddle board fin designed around transportation
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              FlipFin was created to solve a common paddle boarding problem:
              transporting and storing a board with a fin extending underneath
              it.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Its flipping design allows the fin to move into a more convenient
              position underneath the board, helping paddlers spend less time
              removing hardware and more time enjoying the water.
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
            <RotateCcw size={50} className="text-sky-400" />

            <h3 className="mt-6 text-3xl font-bold">
              One fin. Two positions.
            </h3>

            <p className="mt-5 leading-8 text-slate-300">
              Use the fin in its normal paddling position while on the water,
              then flip it underneath the board when you are ready to carry,
              transport, or store your paddle board.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {flipFinBenefits.map((benefit) => (
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

      {/* CTA */}
      <section className="bg-sky-500 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Ready for easier paddle board transportation?
            </h2>

            <p className="mt-3 text-lg text-sky-50">
              Order FlipFin for $39.99 plus $9.99 shipping within the United
              States.
            </p>
          </div>

          <a
            href="#order"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Order FlipFin
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;