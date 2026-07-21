import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  RotateCcw,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import productImage1 from "../assets/images/flipfin-product1.jpg";
import productImage2 from "../assets/images/flipfin-product2.jpg";
import productImage3 from "../assets/images/flipfin-product3.jpg";
import productImage4 from "../assets/images/flipfin-product4.jpg";
import productImage5 from "../assets/images/flipfin-product5.jpg";
import productImage6 from "../assets/images/flipfin-product6.png";
import InstallationVideo from "../components/sections/InstallationVideo";
import RotatingCube from "../components/sections/RotatingCube";

const productPrice = "$39.99";

const faqItems = [
  {
    question: "What makes Flip Fin easier to store?",
    answer:
      "The foldable fin collapses into a sleek, low-profile position, helping reduce bulk when the paddleboard is stored at home, loaded into a vehicle, or transported.",
  },
  {
    question: "How do I secure or release the fin?",
    answer:
      "With a simple push or pull, you can secure or release the fin in seconds, making setup and packing quick and convenient.",
  },
  {
    question: "Does the foldable design affect performance?",
    answer:
      "The fin is engineered to provide the stability and control needed for a smooth, enjoyable ride and reliable handling on the water.",
  },
  {
    question: "Is Flip Fin compatible with every paddleboard?",
    answer:
      "Flip Fin is compatible with a variety of boards and fins, but paddleboards can use different mounting systems. Contact us with photos of your current fin and fin box when you are unsure.",
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-white px-6 pb-24 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              <Waves size={18} />
              Innovative Stand-Up Paddle Board Fin
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Revolutionary Foldable Fin
              <span className="block text-sky-500">
                for Easy Storage and Handling
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Introducing our innovative Stand-Up Paddle Board with a foldable
              fin designed for the ultimate convenience. Whether you're storing
              your board at home, in your car, or transporting it to your
              favorite waterway, our foldable fin makes it easier than ever. No
              more struggling with bulky fins or worrying about limited storage
              space.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Explore Flip Fin
                <ArrowRight size={19} />
              </a>

              <a
                href="#installation"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-sky-500 hover:bg-sky-50"
              >
                See Flip Fin in Action
              </a>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[420px] items-center justify-center lg:justify-end">
            <div className="absolute inset-8 rounded-full bg-sky-200/50 blur-3xl" />
            <RotatingCube
              images={[
                productImage1,
                productImage2,
                productImage3,
                productImage4,
                productImage5,
                productImage6,
              ]}
            />
          </div>
        </div>
      </section>

      <section id="installation" className="scroll-mt-28 bg-slate-50">
        <InstallationVideo />
      </section>

      <section id="product" className="scroll-mt-28 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Product
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Compact, convenient, and easy to use
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <RotateCcw size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                Compact &amp; Convenient
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Our foldable fin easily collapses to a sleek, low-profile
                design, taking up minimal space. It’s perfect for urban living,
                traveling, or simply maximizing your storage options.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Wrench size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                Effortless Setup
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                With a simple push or pull, you can secure or release the fin in
                seconds, making setup and packing a breeze. Enjoy more time on
                the water and less hassle with your gear.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <ShieldCheck size={28} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950">
                Durable Performance
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Despite its foldable design, our fin is engineered to provide
                all the stability and control you need for a smooth and
                enjoyable ride. Paddle with confidence, knowing you’ll
                experience reliable handling every time you hit the water.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="benefits" className="scroll-mt-28 bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-sky-400">
              Benefits
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Store Smarter, Paddle Further
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              From apartment living to road trips, our foldable fin makes
              transporting your paddleboard more convenient than ever. When
              you're ready to go, simply unfold the fin and you're ready for
              adventure!
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Low-profile design takes up minimal space",
                "Simple push or pull operation",
                "Easier storage and transportation",
                "Stable and reliable handling on the water",
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
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={productImage1}
              alt="Flip Fin mounted on a paddleboard"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="compatibility" className="scroll-mt-28 bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-widest text-sky-600">
            Straightforward Directions &amp; Compatibility
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Simple to set up and ready for the water
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Getting started with your foldable fin is simple! The directions are
            clear and easy to follow, so you can set up your board quickly and
            confidently.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            The foldable fin is also compatible with a variety of boards and
            fins, making it a versatile choice for your paddleboarding needs. No
            complicated steps—just unfold the fin, follow the instructions, and
            you’re ready to hit the water!
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            Ask About Compatibility
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq((current) => (current === index ? null : index))
                    }
                  >
                    <span className="text-lg font-bold text-slate-950">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 text-sky-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 py-5 sm:px-8">
                      <p className="leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="order" className="scroll-mt-28 bg-sky-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 text-center shadow-xl sm:p-12">
          <p className="font-semibold uppercase tracking-widest text-sky-600">
            Flip Fin
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Store smarter. Paddle further.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Enjoy easier storage, faster setup, and dependable performance every
            time you hit the water.
          </p>
          <p className="mt-8 text-5xl font-bold text-slate-950">
            {productPrice}
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-sky-600"
          >
            Contact Us to Order
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;