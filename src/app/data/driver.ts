// export type Driver = {
//   id: number;
//   name: string;
//   price: string;
//   oldPrice?: string;
//   note?: string;
//   image: string;
//   images: string[];
// };

// const driversData: Driver[] = [];

// /data/drivers.ts
export type Driver = {
  id: string;
  name: string;
  team: string;
  slug: string;
  image: string; // put images to /public/images/drivers/...
  alt?: string;
  cta?: { text: string; href: string };
};

export const drivers: Driver[] = [
  {
    id: "driver-hamilton",
    name: "Lewis Hamilton",
    team: "Mercedes",
    slug: "hamilton",
    image: "/images/drivers/hamilton.png",
    alt: "Lewis Hamilton portrait",
    cta: { text: "Shop Hamilton", href: "/drivers/hamilton" },
  },
  {
    id: "driver-norris",
    name: "Lando Norris",
    team: "McLaren",
    slug: "norris",
    image: "/images/drivers/norris.png",
    alt: "Lando Norris portrait",
    cta: { text: "Shop Norris", href: "/drivers/norris" },
  },
  {
    id: "driver-verstappen",
    name: "Max Verstappen",
    team: "Red Bull",
    slug: "verstappen",
    image: "/images/drivers/verstappen.png",
    alt: "Max Verstappen portrait",
    cta: { text: "Shop Verstappen", href: "/drivers/verstappen" },
  },
  {
    id: "driver-russell",
    name: "George Russell",
    team: "Mercedes",
    slug: "russell",
    image: "/images/drivers/russell.png",
    alt: "George Russell portrait",
    cta: { text: "Shop Russell", href: "/drivers/russell" },
  },
  {
    id: "driver-leclerc",
    name: "Charles Leclerc",
    team: "Ferrari",
    slug: "leclerc",
    image: "/images/drivers/leclerc.png",
    alt: "Charles Leclerc portrait",
    cta: { text: "Shop Leclerc", href: "/drivers/leclerc" },
  },
  {
    id: "driver-gasly",
    name: "Pierre Gasly",
    team: "AlphaTauri",
    slug: "gasly",
    image: "/images/drivers/gasly.png",
    alt: "Pierre Gasly portrait",
    cta: { text: "Shop Gasly", href: "/drivers/gasly" },
  },
  {
    id: "driver-alonso",
    name: "Fernando Alonso",
    team: "Alpine",
    slug: "alonso",
    image: "/images/drivers/alonso.png",
    alt: "Fernando Alonso portrait",
    cta: { text: "Shop Alonso", href: "/drivers/alonso" },
  },
  {
    id: "driver-sainz",
    name: "Carlos Sainz",
    team: "Ferrari",
    slug: "sainz",
    image: "/images/drivers/sainz.png",
    alt: "Carlos Sainz portrait",
    cta: { text: "Shop Sainz", href: "/drivers/sainz" },
  },
];