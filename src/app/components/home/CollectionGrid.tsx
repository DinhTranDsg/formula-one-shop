import NextImage from "next/image";

export default function CollectionGrid() {
  return (
    <section className="h-156 grid bg-white grid-cols-1 gap-6 px-8 md:grid-cols-2">
      <div className="relative h-full overflow-hidden rounded-lg">
        <NextImage src="/norris.jpg" alt="Norris" fill className="object-cover" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-bold">Norris World Champion Range</h3>
          <button className="mt-3 rounded-full bg-white px-5 py-2 text-sm text-black">
            Shop now
          </button>
        </div>
      </div>

      <div className="relative h-full overflow-hidden rounded-lg">
        <NextImage src="/elements.jpg" alt="Elements" fill className="object-cover" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-bold">Elements Collection</h3>
          <button className="mt-3 rounded-full bg-white px-5 py-2 text-sm text-black">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}