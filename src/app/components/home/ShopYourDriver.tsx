// export default function ShopYourDriver() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12">
//       <h2 className="mb-6 text-lg font-bold tracking-wide">
//         SHOP YOUR DRIVER
//       </h2>

//       <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
//         {drivers.map((driver) => (
//           <div key={driver.id} className="group cursor-pointer">
//             <div
//               className={`relative aspect-[3/4] overflow-hidden rounded-md ${driver.bg}`}
//             >
//               <Image
//                 src={driver.image}
//                 alt={driver.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             <p className="mt-3 text-sm font-medium text-gray-900">
//               {driver.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }