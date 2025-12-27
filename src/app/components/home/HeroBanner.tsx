import Image from "next/image";
export default function HeroBanner() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/EndOfSeason.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 text-white">
        <h1 className="text-5xl font-extrabold uppercase leading-tight">
          End of Season <br /> Sale
        </h1>
        <p className="mt-4 text-lg">
          Up to 50% Off Selected Lines
        </p>

        <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200">
          Shop now
        </button>
      </div>
    </section>
  );
}
