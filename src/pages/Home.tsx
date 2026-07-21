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

import logo from "../assets/images/flipfin-logo.png";
import productImage1 from "../assets/images/flipfin-product1.jpg";
import productImage2 from "../assets/images/flipfin-product2.jpg";
import productImage3 from "../assets/images/flipfin-product3.jpg";
import productImage4 from "../assets/images/flipfin-product4.jpg";
import productImage5 from "../assets/images/flipfin-product5.jpg";
import productImage6 from "../assets/images/flipfin-product6.png";
import InstallationVideo from "../components/sections/InstallationVideo";
import RotatingCube from "../components/sections/RotatingCube";

const purchaseUrl = "/contact";
const productPrice = "$39.99";
const shippingPrice = "$9.99";

const features = [
  {
    icon: RotateCcw,
    title: "Compact and Convenient",
    description:
      "Fold the fin into a low-profile position to make storage, transportation, and handling easier.",
  },
  {
    icon: Wrench,
    title: "Effortless Setup",
    description:
      "Secure or release the fin in seconds with a simple push or pull operation.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Performance",
    description:
      "Designed to provide reliable stability, control, and handling while you are paddling.",
  },
];

const benefits = [
  "Compact, low-profile position for storage",
  "Quick push or pull operation",
  "Less hassle during transportation",
  "Reliable stability and control on the water",
];

const compatibilityItems = [
  {
    title: "Check Your Fin Box",
    description:
      "Compare your paddle board's existing fin connection with the Flip Fin mounting system before ordering.",
  },
  {
    title: "Measure the Mounting Area",
    description:
      "Make sure there is enough room underneath the paddle board for the mounting hardware and folding movement.",
  },
  {
    title: "Contact Us When Unsure",
    description:
      "Send us clear photos of your current fin, fin box, and mounting area so we can help review compatibility.",
  },
];

const includedItems = [
  "Flip Fin paddle board fin system",
  "Required mounting hardware",
  "Installation video and instructions",
  "Shipping within the United States",
  "Secure hosted checkout",
];

const faqItems = [
  {
    question: "Does Flip Fin fit every paddle board?",
    answer:
      "Compatibility can vary because paddle boards use different fin boxes and mounting systems. Please review your board before ordering or contact us with clear photos.",
  },
  {
    question: "Is installation difficult?",
    answer:
      "Installation is designed to be straightforward. The product includes mounting hardware, instructions, and an installation video.",
  },
  {
    question: "Do I need to remove the fin for transportation?",
    answer:
      "No. Flip Fin is designed to fold into a lower-profile position to make carrying, transporting, and storing the board easier.",
  },
  {
    question: "Can I paddle normally with Flip Fin?",
    answer:
      "Yes. Return the fin to its paddling position and make sure it is properly secured before entering the water.",
  },
  {
    question: "What is included with my order?",
    answer:
      "Your order includes the Flip Fin system, required mounting hardware, installation instructions, and access to the installation video.",
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <>
      <section className="relative flex min-h-[780px] items-center overflow-hidden bg-white px-6 pb-24 pt-40 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              <Waves size={18} />
              Revolutionary Foldable Paddle Board Fin
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Store smarter.
              <span className="block text-sky-500">Paddle further.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Flip Fin folds into a compact, low-profile position for easier
              storage, transportation, and handling. Secure or release the fin
              in seconds and spend less time managing equipment and more time
              on the water.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#order"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Buy Flip Fin — {productPrice}
                <ArrowRight size={19} />
              </a>

              <a
                href="#installation"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-sky-500 hover:bg-sky-50"
              >
                Watch How It Works
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.slice(0, 2).map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-sky-500"
                  />
                  <span className="text-sm leading-6 text-slate-600">
                    {benefit}
                  </span>
                </div>
              ))}
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

      <section id="product" className="scroll-mt-28 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={logo}
              alt="Flip Fin logo"
              className="mx-auto h-28 w-28 rounded-full bg-white object-contain shadow-md"
            />

            <p className="mt-8 font-semibold uppercase tracking-widest text-sky-600">
              The Flip Fin System
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              A foldable fin built for easier storage and handling
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              No more struggling with a bulky fin while storing your board at
              home, loading it into your vehicle, or transporting it to the
              water.
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

      <section id="benefits" className="scroll-mt-28 bg-slate-950 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-sky-400">
              Store Smarter. Paddle Further.
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Spend less time managing your gear
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Flip Fin helps make apartment storage, road trips, vehicle
              loading, and everyday board handling more convenient.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-sky-400"
                  />
                  <p className="leading-7 text-slate-200">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={productImage1}
              alt="Close-up of the Flip Fin system mounted on a paddle board"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="compatibility" className="scroll-mt-28 bg-slate-100 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Compatibility
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Check your paddle board before ordering
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Paddle boards can use different fin boxes and mounting systems.
              Review your setup before purchasing.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {compatibilityItems.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <div className="flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold">
                  Not sure whether Flip Fin fits?
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  Send us clear photos of your current fin, fin box, and the
                  bottom of your paddle board. We can help review compatibility.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="installation" className="scroll-mt-28 bg-slate-50">
        <InstallationVideo />
      </section>

      <section id="faq" className="scroll-mt-28 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Questions about Flip Fin
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
                    onClick={() => toggleFaq(index)}
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
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-xl">
            <img
              src={productImage1}
              alt="Flip Fin paddle board fin system"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-sky-600">
              Order Online
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Flip Fin Paddle Board Fin System
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Fold the fin into a lower-profile position whenever you need to
              carry, transport, or store your paddle board.
            </p>

            <div className="mt-8 flex items-end gap-3">
              <p className="text-5xl font-bold text-slate-950">{productPrice}</p>
              <p className="pb-1 text-slate-500">per system</p>
            </div>

            <div className="mt-5 rounded-xl border border-sky-200 bg-white p-5 shadow-sm">
              <div className="flex justify-between gap-4">
                <span className="text-slate-600">Product</span>
                <span className="font-semibold text-slate-950">
                  {productPrice}
                </span>
              </div>
              <div className="mt-3 flex justify-between gap-4">
                <span className="text-slate-600">U.S. shipping</span>
                <span className="font-semibold text-slate-950">
                  {shippingPrice}
                </span>
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
                Buy Flip Fin
                <ArrowRight size={20} />
              </a>
            ) : (
              <Link
                to={purchaseUrl}
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-sky-600"
              >
                Order Flip Fin
                <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sky-500 px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Ready for easier paddle board storage and transportation?
            </h2>
            <p className="mt-3 text-lg text-sky-50">
              Store smarter, paddle further, and spend less time managing your
              gear.
            </p>
          </div>

          <a
            href="#order"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Order Flip Fin
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;