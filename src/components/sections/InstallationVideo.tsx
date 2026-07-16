import { CheckCircle2, PlayCircle } from "lucide-react";

const installationVideo =
  "https://res.cloudinary.com/gjyoytz8/video/upload/v1784220340/VID-20250402-WA0000_bz7m0e.mp4";

const InstallationVideo = () => {
  const steps = [
    "Position the mounting system underneath the paddle board",
    "Secure the components using the included hardware",
    "Attach the fin and confirm that it is firmly installed",
  ];

  const handlePlayVideo = () => {
    const video = document.querySelector<HTMLVideoElement>(
      "#flipfin-installation-video"
    );

    video?.play();
    video?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="bg-slate-100 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl bg-black shadow-2xl">
          <video
            id="flipfin-installation-video"
            className="aspect-video w-full object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src={installationVideo} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-widest text-sky-600">
            Simple Installation
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Install your FlipFin with confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This step-by-step video shows the components, positioning,
            assembly, and final installation underneath the paddle board.
          </p>

          <div className="mt-8 space-y-5">
            {steps.map((step) => (
              <div key={step} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-1 shrink-0 text-sky-600"
                  size={22}
                />
                <p className="leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
            onClick={handlePlayVideo}
          >
            <PlayCircle size={20} />
            Watch Installation
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstallationVideo;