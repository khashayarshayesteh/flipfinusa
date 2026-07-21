import { Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-6 pb-24 pt-40 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-sky-400">
            Contact Us
          </p>

          <h1 className="mt-5 text-5xl font-bold">
            Contact FlipFin USA
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question about compatibility, installation, shipping, or your
            order? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="space-y-8">

            <div className="rounded-2xl bg-slate-900 p-8">
              <Mail className="text-sky-400" size={30} />

              <h2 className="mt-4 text-2xl font-bold">
                Email
              </h2>

              <p className="mt-3 text-slate-300">
                info@flipfinusa.com
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-8">
              <Clock className="text-sky-400" size={30} />

              <h2 className="mt-4 text-2xl font-bold">
                Response Time
              </h2>

              <p className="mt-3 text-slate-300">
                We usually reply within one business day.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 text-slate-900">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <form className="mt-8 space-y-6">

              <div>
                <label className="mb-2 block font-medium">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-sky-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;