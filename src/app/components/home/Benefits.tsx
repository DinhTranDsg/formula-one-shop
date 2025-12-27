export default function Benefits() {
  return (
    <section className="grid grid-cols-2 text-black gap-6 bg-white px-8 py-10 md:grid-cols-4">
      {[
        "100% Official Merchandise",
        "Safe & Secure Checkout",
        "Worldwide Delivery",
        "Save 15% Instantly",
      ].map((text) => (
        <div key={text} className="text-center bg-gray-100 text-sm font-medium">
          {text}
        </div>
      ))}
    </section>
  );
}