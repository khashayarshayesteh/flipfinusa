import { ArrowRight, CheckCircle2, Waves } from "lucide-react";
import { Link } from "react-router-dom";

import productImage1 from "../assets/images/flipfin-product1.jpg";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 pb-24 pt-40 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              <Waves size={18} />
              About Flip Fin
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              A smarter way to store, transport, and enjoy your paddleboard
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              Flip Fin was created to solve a common paddleboarding problem:
              traditional fins can be bulky and inconvenient during storage and
              transportation.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The foldable design helps reduce that hassle while maintaining
              the stability and control paddlers need on the water.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={productImage1}
              alt="Flip Fin paddleboard fin system"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Compact, low-profile storage",
              "Quick push or pull setup",
              "Reliable handling on the water",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <CheckCircle2 className="text-sky-600" size={28} />
                <p className="mt-5 text-lg font-semibold text-slate-900">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Have a question about Flip Fin?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              Contact us for product information, compatibility questions, or
              ordering assistance.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
            >
              Contact Us
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;