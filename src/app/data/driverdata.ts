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

<<<<<<< HEAD
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
=======
export const driversData: Driver[] = [
  {
    id: 1,
    name: "Scuderia Ferrari 2025 Team Charles Leclerc Cap - White",
    price: "£41.00",
    oldPrice: "£24.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-white_ss5_p-202359097+pv-1+u-kloy7ehzt2nhzw6wpm3l+v-iewr9xcnztosk8lc9mwz.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-white_ss5_p-202359097+pv-2+u-kloy7ehzt2nhzw6wpm3l+v-glksfv5xhkhmd5u3xhjc.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-white_ss5_p-202359097+pv-3+u-kloy7ehzt2nhzw6wpm3l+v-akmqjzvp0jf9vfpe49fw.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-white_ss5_p-202359097+pv-4+u-kloy7ehzt2nhzw6wpm3l+v-drj7i2doqhbbdjuehqwe.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 2,
    name: "Scuderia Ferrari Charles LeClerc 60 x 90 Flag",
    price: "£22.50",
    oldPrice: "£22.50",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-charles-leclerc-60-x-90-flag_ss5_p-202359005+pv-1+u-ydduds7nqjkcmfnxuzxo+v-q6khd0msi3tqyg3dphlk.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-charles-leclerc-60-x-90-flag_ss5_p-202359005+pv-2+u-ydduds7nqjkcmfnxuzxo+v-8j8k4x4k4x4k4x4k4x4k.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 3,
    name: "Scuderia Ferrari 2025 Team Charles Leclerc Cap - Red - Kids",
    price: "£36.00",
    oldPrice: "£18.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-red-kids_ss5_p-202359003+pv-1+u-tmmzayz1s91unbz3yovu+v-bh9tcesxwjfux7krdpsz.png?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-red-kids_ss5_p-202359003+pv-3+u-tmmzayz1s91unbz3yovu+v-xh5guj3gkl9tef7kns9k.png?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-charles-leclerc-cap-red-kids_ss5_p-202359003+pv-2+u-tmmzayz1s91unbz3yovu+v-tdxdktptunc8dt8tdwpk.png?_hv=2&w=1018",
    ],
  },

  {
    id: 4,
    name: "Haas F1 Moneygram Esteban Ocon Drivers Print T-Shirt - Black",
    price: "£48.00",
    oldPrice: "£40.00",
    image:
      "https://images.footballfanatics.com/haas-f1-team/haas-f1-moneygram-esteban-ocon-drivers-print-t-shirt-black_ss5_p-202620515+pv-1+u-tjvr7hxlte4h4pmdhlqx+v-kkbrcvm3b1lo0wisrqsx.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/haas-f1-team/haas-f1-moneygram-esteban-ocon-drivers-print-t-shirt-black_ss5_p-202620515+pv-2+u-tjvr7hxlte4h4pmdhlqx+v-2ogtluaq1hvc7yc1tcvg.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/haas-f1-team/haas-f1-moneygram-esteban-ocon-drivers-print-t-shirt-black_ss5_p-202620515+pv-1+u-tjvr7hxlte4h4pmdhlqx+v-kkbrcvm3b1lo0wisrqsx.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 5,
    name: "Aston Martin Aramco Cognizant F1 2025 Fernando Alonso Team Driver T-Shirt",
    price: "£49.00",
    oldPrice: "£61.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-fernando-alonso-team-driver-t-shirt_ss5_p-202359058+pv-1+u-779c5zoylax1dggz1xqe+v-espaa4ziuypgygnbmrxt.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-fernando-alonso-team-driver-t-shirt_ss5_p-202359058+pv-2+u-779c5zoylax1dggz1xqe+v-xusvbqfbnffnh5zcvxvv.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-fernando-alonso-team-driver-t-shirt_ss5_p-202359058+pv-3+u-779c5zoylax1dggz1xqe+v-yttj3ddbzgbympzuzzuu.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-fernando-alonso-team-driver-t-shirt_ss5_p-202359058+pv-4+u-779c5zoylax1dggz1xqe+v-tnykujx2zwshgf72wpcs.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 6,
    name: "Aston Martin Aramco F1 2024 Fernando Alonso Team Driver T-Shirt",
    price: "£42.00",
    oldPrice: "£50.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-team-polo_ss5_p-202359043+pv-1+u-remfslk2yiuc6ugrwouf+v-dicgv7psiyqbco8qrcnb.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-team-polo_ss5_p-202359043+pv-1+u-remfslk2yiuc6ugrwouf+v-dicgv7psiyqbco8qrcnb.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-team-polo_ss5_p-202359043+pv-3+u-remfslk2yiuc6ugrwouf+v-a1vop9mhiuqelg1zoezy.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-cognizant-f1-2025-team-polo_ss5_p-202359043+pv-4+u-remfslk2yiuc6ugrwouf+v-fkwbgpqqqqbrti5ul1cz.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 7,
    name: "Aston Martin Aramco Formula One® Team - Fernando Alonso - 2024",
    price: "£74.00",
    oldPrice: "£89.00",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-formula-one%C2%AE-team-fernando-alonso-2024_ss5_p-202013848+pv-1+u-esxz3wmiamhh6dagjaur+v-zw27jpcvler4ako26obg.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-formula-one%C2%AE-team-fernando-alonso-2024_ss5_p-202013848+pv-1+u-esxz3wmiamhh6dagjaur+v-zw27jpcvler4ako26obg.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 8,
    name: "Aston Martin Cognizant F1 Official Kimoa Fernando Alonso T-Shirt",
    price: "£50.00",
    oldPrice: "£66.00",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-official-kimoa-fernando-alonso-t-shirt_ss5_p-201347845+pv-1+u-xaitsegewjk9mxgggp88+v-wy7fmbsvgtxmcglfxxmi.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-official-kimoa-fernando-alonso-t-shirt_ss5_p-201347845+pv-1+u-xaitsegewjk9mxgggp88+v-wy7fmbsvgtxmcglfxxmi.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-official-kimoa-fernando-alonso-t-shirt_ss5_p-201347845+pv-2+u-xaitsegewjk9mxgggp88+v-q3yuklh8pyobzobusqmm.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-cognizant-f1-official-kimoa-fernando-alonso-t-shirt_ss5_p-201347845+pv-3+u-xaitsegewjk9mxgggp88+v-weepxjmb5wqtcby210za.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 9,
    name: "Kick Sauber F1 2025 Gabriel Bortoleto Driver Cap",
    price: "£79.00",
    oldPrice: "£95.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-f1-2025-gabriel-bortoleto-driver-cap_ss5_p-203037740+pv-1+u-hyane5h4y9p1umwahslu+v-6nwsvdzf5yytvxivg6g9.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-f1-2025-gabriel-bortoleto-driver-cap_ss5_p-203037740+pv-2+u-hyane5h4y9p1umwahslu+v-vcwhtmzhrdcfl5qszaip.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-f1-2025-gabriel-bortoleto-driver-cap_ss5_p-203037740+pv-3+u-hyane5h4y9p1umwahslu+v-9akshof2ugukibierkdw.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-f1-2025-gabriel-bortoleto-driver-cap_ss5_p-203037740+pv-4+u-hyane5h4y9p1umwahslu+v-0tceuhpmy3mfqd4wyuqg.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 10,
    name: "Mercedes AMG Petronas F1 No.63 George Russell 1:64 Model",
    price: "£45.00",
    oldPrice: "£59.00",
    image:
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-no63-george-russell-1:64-model_ss4_p-13364194+pv-1+u-n61w0l1kfy3ft5w9qiww+v-f36c07d9f90d4ec286f9a0ede60bc0cf.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-no63-george-russell-1:64-model_ss4_p-13364194+pv-2+u-n61w0l1kfy3ft5w9qiww+v-0bbea53f964b4e96ae9c4da915008fd7.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-no63-george-russell-1:64-model_ss4_p-13364194+pv-3+u-n61w0l1kfy3ft5w9qiww+v-c0b467cffbca41fd80e2a675b16afc59.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-no63-george-russell-1:64-model_ss4_p-13364194+pv-4+u-n61w0l1kfy3ft5w9qiww+v-925bce6aa446465ba2f75723146523f2.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 11,
    name: "Mercedes AMG Petronas adidas F1 George Russell T-Shirt - Black",
    price: "£72.00",
    oldPrice: "£88.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-george-russell-t-shirt-black_ss5_p-202641255+pv-4+u-zkos2bbnfdvrmysj0dvt+v-izgo2gog1unmzhityw8k.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-george-russell-t-shirt-black_ss5_p-202641255+pv-5+u-zkos2bbnfdvrmysj0dvt+v-z9vbqtpngzwy4v0tlgzd.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-george-russell-t-shirt-black_ss5_p-202641255+pv-6+u-zkos2bbnfdvrmysj0dvt+v-dpp4cmgve8162brnkmyx.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-george-russell-t-shirt-black_ss5_p-202641255+pv-7+u-zkos2bbnfdvrmysj0dvt+v-xsqmgdjnmn2sack3eimi.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 12,
    name: "Mercedes AMG Petronas adidas F1 2025 George Russell Cap - White",
    price: "£43.00",
    oldPrice: "£57.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-george-russell-cap-white_ss5_p-202641232+pv-1+u-in3gzthbi3zfxwhejiah+v-4lxbyz2jpq15b58lccdv.png?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-george-russell-cap-white_ss5_p-202641232+pv-2+u-in3gzthbi3zfxwhejiah+v-ccl6hp7cfj3vg9jt7tvl.png?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-george-russell-cap-white_ss5_p-202641232+pv-3+u-in3gzthbi3zfxwhejiah+v-oudxfspi9rbah3v2emme.png?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-george-russell-cap-white_ss5_p-202641232+pv-4+u-in3gzthbi3zfxwhejiah+v-ippjaexl1hccmswfdidy.png?_hv=2&w=1018",
    ],
  },

  {
    id: 13,
    name: "Mercedes AMG Petronas F1 George Russell Hoodie - Black",
    price: "£70.00",
    oldPrice: "£90.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-george-russell-hoodie-black_ss5_p-202641258+pv-4+u-ltwrfbamppz9mittjc6k+v-kkcjs261jtmxh13zripl.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-george-russell-hoodie-black_ss5_p-202641258+pv-5+u-ltwrfbamppz9mittjc6k+v-ych4ffew8jatpsj77ejj.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-george-russell-hoodie-black_ss5_p-202641258+pv-6+u-ltwrfbamppz9mittjc6k+v-w2hinu96zmd4mwx2jg9l.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-george-russell-hoodie-black_ss5_p-202641258+pv-7+u-ltwrfbamppz9mittjc6k+v-jdmybmgyri8nsycemq3b.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 14,
    name: "Alpine F1 New Era 9SEVENTY Stretch Snap Jack Doohan Cap - Navy",
    price: "£43.00",
    oldPrice: "£57.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/alpine/alpine-f1-new-era-9seventy-stretch-snap-jack-doohan-cap-navy_ss5_p-202169050+pv-1+u-hckm3ybujllxil45gos4+v-h2vwcvysz9syvq1ok3se.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/alpine/alpine-f1-new-era-9seventy-stretch-snap-jack-doohan-cap-navy_ss5_p-202169050+pv-2+u-hckm3ybujllxil45gos4+v-jcfj245uw4yeftsrldlk.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/alpine/alpine-f1-new-era-9seventy-stretch-snap-jack-doohan-cap-navy_ss5_p-202169050+pv-3+u-hckm3ybujllxil45gos4+v-djitcff0jjlznx1chee5.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/alpine/alpine-f1-new-era-9seventy-stretch-snap-jack-doohan-cap-navy_ss5_p-202169050+pv-4+u-hckm3ybujllxil45gos4+v-x2sobsf33rd6omto4xwz.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 15,
    name: "Alpine F1 Team Jack Doohan 2025 Driver T-Shirt - Kids",
    price: "£68.00",
    oldPrice: "£83.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-kids_ss5_p-201494915+pv-1+u-9k2igy9yz6hne3fjb5t4+v-xiblrruxpfivqvtxkewa.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-kids_ss5_p-201494915+pv-2+u-9k2igy9yz6hne3fjb5t4+v-j19qwdro479f9sgm0o1q.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-kids_ss5_p-201494915+pv-3+u-9k2igy9yz6hne3fjb5t4+v-mlvhgu4iocjryelecmbf.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-kids_ss5_p-201494915+pv-4+u-9k2igy9yz6hne3fjb5t4+v-f5zbge5hgxgok5aem14r.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 16,
    name: "Alpine F1 Team Jack Doohan 2025 Driver T-Shirt - Womens",
    price: "£40.00",
    oldPrice: "£50.00",
    image:
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-womens_ss5_p-201494914+pv-1+u-sbxpyojsjknwewlxx1bl+v-goicaletg1brd3ta9aiz.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-womens_ss5_p-201494914+pv-2+u-sbxpyojsjknwewlxx1bl+v-8y4sdvutpcvm705mmxx2.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-womens_ss5_p-201494914+pv-3+u-sbxpyojsjknwewlxx1bl+v-whfvk33gsumtqozoxlr2.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/alpine/alpine-f1-team-jack-doohan-2025-driver-t-shirt-womens_ss5_p-201494914+pv-4+u-sbxpyojsjknwewlxx1bl+v-gd0jbop8vo4ockpbryzr.jpg?_hv=2&w=1018",
    ],
  },

  {
    id: 17,
    name: "Aston Martin Aramco F1 2024 Lance Stroll Team Driver T-Shirt",
    price: "£45.00",
    oldPrice: "£56.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-f1-2024-lance-stroll-team-driver-t-shirt_ss5_p-200838294+pv-1+u-1cbzrzb1ksweoxymyucj+v-6uwfajg9tzzlyun6efyv.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-f1-2024-lance-stroll-team-driver-t-shirt_ss5_p-200838294+pv-2+u-1cbzrzb1ksweoxymyucj+v-hy0or4lccntrheb8lwny.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-aramco-f1-2024-lance-stroll-team-driver-t-shirt_ss5_p-200838294+pv-3+u-1cbzrzb1ksweoxymyucj+v-ynjgsjpwk4gb1a1qmbpn.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 18,
    name: "Aston Martin Lance Stroll Race Special Montreal GP T-Shirt - Navy",
    price: "£50.00",
    oldPrice: "£66.00",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-t-shirt-navy_ss5_p-202163052+pv-1+u-deqkdpvalztm4aylsj2t+v-sdrjiakmzwiwgyel3ibf.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-t-shirt-navy_ss5_p-202163052+pv-2+u-deqkdpvalztm4aylsj2t+v-f0cowqxn5n5zopqgk6iq.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-t-shirt-navy_ss5_p-202163052+pv-3+u-deqkdpvalztm4aylsj2t+v-vwrzf5bcqvfkpi46fiam.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 19,
    name: "Aston Martin Lance Stroll Race Special Montreal GP Cap - Navy",
    price: "£68.00",
    oldPrice: "£83.00",
    image:
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-cap-navy_ss5_p-202163053+pv-1+u-bttod15pzrdsc2inzyro+v-p3cy8scpyv3u2wodpdom.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-cap-navy_ss5_p-202163053+pv-2+u-bttod15pzrdsc2inzyro+v-z5bozhovje4yixojaffl.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-cap-navy_ss5_p-202163053+pv-3+u-bttod15pzrdsc2inzyro+v-jal9ijwrvovx4lcs8f79.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/aston-martin/aston-martin-lance-stroll-race-special-montreal-gp-cap-navy_ss5_p-202163053+pv-4+u-bttod15pzrdsc2inzyro+v-yto15s8qu5ioekfamkkl.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 20,
    name: "McLaren New Era Lando Norris World Drivers' Championship Winner 9FIFTY Cap",
    price: "£49.00",
    oldPrice: "£61.00",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-new-era-lando-norris-world-drivers-championship-winner-9fifty-cap_ss5_p-203697020+pv-1+u-wdjcsqcfpewolyjtd08f+v-5osx2emp8lobujyxtjjr.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-new-era-lando-norris-world-drivers-championship-winner-9fifty-cap_ss5_p-203697020+pv-2+u-wdjcsqcfpewolyjtd08f+v-274ctqra5rlz240n6vvm.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-new-era-lando-norris-world-drivers-championship-winner-9fifty-cap_ss5_p-203697020+pv-3+u-wdjcsqcfpewolyjtd08f+v-dchzx18nxijas1fncpkm.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-new-era-lando-norris-world-drivers-championship-winner-9fifty-cap_ss5_p-203697020+pv-4+u-wdjcsqcfpewolyjtd08f+v-xws8s1e6mk0c3xcuej84.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 21,
    name: "McLaren Lando Norris Championship Winners T-Shirt",
    price: "£45.00",
    oldPrice: "£58.00",
    note: "Driver Cap",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-t-shirt_ss5_p-203672626+pv-1+u-iiczsiqy4ampxfufzybd+v-pebigsfpfahhomupsshs.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-t-shirt_ss5_p-203672626+pv-2+u-iiczsiqy4ampxfufzybd+v-8n5ppkqkmrzkgkpcr0vf.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-t-shirt_ss5_p-203672626+pv-3+u-iiczsiqy4ampxfufzybd+v-twwmzbm3xrnaqz9i6txw.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-t-shirt_ss5_p-203672626+pv-4+u-iiczsiqy4ampxfufzybd+v-deftg6wguvt1o3hnen52.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 22,
    name: "McLaren Lando Norris Championship Winners Hoodie",
    price: "£45.00",
    oldPrice: "£59.00",
    note: "Driver Cap",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-hoodie_ss5_p-203672627+pv-1+u-0xinsfhprkrsddt4efhh+v-ozzylgbjvtial2xgd9pg.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-hoodie_ss5_p-203672627+pv-2+u-0xinsfhprkrsddt4efhh+v-jpcfkcdif4eypmdiivjp.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-hoodie_ss5_p-203672627+pv-3+u-0xinsfhprkrsddt4efhh+v-pzq8shrrbd8drduskcxs.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-lando-norris-championship-winners-hoodie_ss5_p-203672627+pv-4+u-0xinsfhprkrsddt4efhh+v-blxbdcboypmjwckp6x44.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 23,
    name: "McLaren 2025 Team Lando Norris Driver Set Up T-Shirt - Phantom",
    price: "£35.00",
    oldPrice: "£45.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-lando-norris-driver-set-up-t-shirt-phantom_ss5_p-201493685+pv-1+u-tntszwno5iuaolgh8e42+v-4hqdldysxbphw9ednpus.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-lando-norris-driver-set-up-t-shirt-phantom_ss5_p-201493685+pv-2+u-tntszwno5iuaolgh8e42+v-uu1dmstth7jgoeefidp2.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-lando-norris-driver-set-up-t-shirt-phantom_ss5_p-201493685+pv-3+u-tntszwno5iuaolgh8e42+v-ynob4m5yb6xs0psaspve.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-lando-norris-driver-set-up-t-shirt-phantom_ss5_p-201493685+pv-4+u-tntszwno5iuaolgh8e42+v-gcsvvqwipjggmvdp2g7u.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 24,
    name: "Scuderia Ferrari 2025 Team Lewis Hamilton Cap - White",
    price: "£38.00",
    oldPrice: "£48.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-white_ss5_p-202358979+pv-1+u-gq5oeycuix4ewgkqpq4f+v-kdtm8sgd3dld7hz7xlh5.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-white_ss5_p-202358979+pv-2+u-gq5oeycuix4ewgkqpq4f+v-vftxgaoqlsglm7bqkteq.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-white_ss5_p-202358979+pv-3+u-gq5oeycuix4ewgkqpq4f+v-ub6uyzwmwmqw63sm8mka.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 25,
    name: "Scuderia Ferrari 2025 Team Lewis Hamilton Cap - Red",
    price: "£47.00",
    oldPrice: "£62.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-red_ss5_p-202358980+pv-1+u-cyv4xtwh0yojc1dmjekk+v-y7oh4sonuwmqcrj21acg.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-red_ss5_p-202358980+pv-2+u-cyv4xtwh0yojc1dmjekk+v-kwfwioyd60jlkvo90gwt.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-team-lewis-hamilton-cap-red_ss5_p-202358980+pv-4+u-cyv4xtwh0yojc1dmjekk+v-zkwenbmtmwzkbvd9oyup.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 26,
    name: "Scuderia Ferrari SF-25 Lewis Hamilton 2025 Poster",
    price: "£44.00",
    oldPrice: "£58.00",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-sf-25-lewis-hamilton-2025-poster_ss5_p-203280861+pv-1+u-q3pkgqc5xzi6qtlwnztn+v-1ms6pp9zh3kyofyyb9vs.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-sf-25-lewis-hamilton-2025-poster_ss5_p-203280861+pv-2+u-q3pkgqc5xzi6qtlwnztn+v-uam2nv0iyjjjsxkcunne.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-sf-25-lewis-hamilton-2025-poster_ss5_p-203280861+pv-3+u-q3pkgqc5xzi6qtlwnztn+v-ganobcb7j57h3hxywpsv.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 27,
    name: "Oracle Red Bull Racing No.1 Max Verstappen 1:64 Model",
    price: "£50.00",
    oldPrice: "£65.00",
    image:
      "https://images.footballfanatics.com/red-bull-racing/oracle-red-bull-racing-no1-max-verstappen-1:64-model_ss4_p-13364189+pv-1+u-125clqpxg369ytegzsuk+v-dc9bd06f4872489e879ec68836ccc33e.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/red-bull-racing/oracle-red-bull-racing-no1-max-verstappen-1:64-model_ss4_p-13364189+pv-2+u-125clqpxg369ytegzsuk+v-c5ef840a420e4cf49d39a0db9c4ae305.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/oracle-red-bull-racing-no1-max-verstappen-1:64-model_ss4_p-13364189+pv-3+u-125clqpxg369ytegzsuk+v-2cb3b2474f4e4341b63efbc6ea9c268c.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/oracle-red-bull-racing-no1-max-verstappen-1:64-model_ss4_p-13364189+pv-4+u-125clqpxg369ytegzsuk+v-503e5be2fb484c9da19158e5ff5178f8.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 28,
    name: "Red Bull Racing Max Verstappen Puzzle Driver T-Shirt - White - Unisex",
    price: "£42.00",
    oldPrice: "£55.00",
    image:
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-puzzle-driver-t-shirt-white-unisex_ss5_p-201963820+pv-1+u-dibgxm2q7bsczqivvobb+v-gnyj3vum9dza09odjlzm.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-puzzle-driver-t-shirt-white-unisex_ss5_p-201963820+pv-2+u-dibgxm2q7bsczqivvobb+v-atqnqop6eeuh6vcbt4xr.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-puzzle-driver-t-shirt-white-unisex_ss5_p-201963820+pv-3+u-dibgxm2q7bsczqivvobb+v-e6hdojlbeez664wkv296.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-puzzle-driver-t-shirt-white-unisex_ss5_p-201963820+pv-4+u-dibgxm2q7bsczqivvobb+v-e6swiips6xbitsb3uice.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 29,
    name: "Red Bull Racing 2025 Max Verstappen Team Polo - Womens",
    price: "£78.00",
    oldPrice: "£95.00",
    image:
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2025-max-verstappen-team-polo-womens_ss5_p-201493648+pv-1+u-ocvcnq9mftw13vcfk14s+v-srhgwdvewqip0wzgjttr.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2025-max-verstappen-team-polo-womens_ss5_p-201493648+pv-2+u-ocvcnq9mftw13vcfk14s+v-sgnlfxrnzux9bksavmb0.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2025-max-verstappen-team-polo-womens_ss5_p-201493648+pv-3+u-ocvcnq9mftw13vcfk14s+v-i0rl229tcmcvuvcdr98x.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2025-max-verstappen-team-polo-womens_ss5_p-201493648+pv-4+u-ocvcnq9mftw13vcfk14s+v-jmykqxn00vdl6lzanwec.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 30,
    name: "Red Bull Racing Max Verstappen Dutch Grand Prix Collector's Edition Poster - 2024",
    price: "£49.00",
    oldPrice: "£63.00",
    image:
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-dutch-grand-prix-collectors-edition-poster-2024_ss5_p-202287567+pv-1+u-xo4psfq8efb6l0pv0ebf+v-pxqwqr4coha3sspsyiud.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-dutch-grand-prix-collectors-edition-poster-2024_ss5_p-202287567+pv-1+u-xo4psfq8efb6l0pv0ebf+v-pxqwqr4coha3sspsyiud.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 31,
    name: "Kick Sauber Nico Hulkenberg First Podium Poster",
    price: "£33.00",
    oldPrice: "£44.00",
    image:
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-nico-hulkenberg-first-podium-poster_ss5_p-203334877+pv-1+u-pydwza9jbskrfnwgxhae+v-1ct8dos0hmuhgbbbtfwz.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-nico-hulkenberg-first-podium-poster_ss5_p-203334877+pv-1+u-pydwza9jbskrfnwgxhae+v-1ct8dos0hmuhgbbbtfwz.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/kick-sauber/kick-sauber-nico-hulkenberg-first-podium-poster_ss5_p-203334877+pv-2+u-pydwza9jbskrfnwgxhae+v-i2xepe4qwxyqgvmovwqo.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 32,
    name: "McLaren 2025 Team Oscar Piastri Driver Polo",
    price: "£82.00",
    oldPrice: "£99.00",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-polo_ss5_p-201493690+pv-1+u-qgsk1xeiannmvptk0pbj+v-dnxjzuec3any6bbnhflq.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-polo_ss5_p-201493690+pv-1+u-qgsk1xeiannmvptk0pbj+v-dnxjzuec3any6bbnhflq.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-polo_ss5_p-201493690+pv-2+u-qgsk1xeiannmvptk0pbj+v-aliqt6qy1quodmlzpjij.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-polo_ss5_p-201493690+pv-3+u-qgsk1xeiannmvptk0pbj+v-todgnyhlpzlvmwxdewav.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-polo_ss5_p-201493690+pv-4+u-qgsk1xeiannmvptk0pbj+v-bekmec30gvyl90akcckj.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 33,
    name: "McLaren 2025 Team Oscar Piastri Driver Set Up T-Shirt - Phantom",
    price: "£46.00",
    oldPrice: "£60.00",
    note: "CLEARANCE",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-set-up-t-shirt-phantom_ss5_p-201493715+pv-1+u-unuvxidlzfycpjlkfncs+v-3khimse1v5pua9vpkplu.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-set-up-t-shirt-phantom_ss5_p-201493715+pv-1+u-unuvxidlzfycpjlkfncs+v-3khimse1v5pua9vpkplu.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-set-up-t-shirt-phantom_ss5_p-201493715+pv-2+u-unuvxidlzfycpjlkfncs+v-wqsffzuf6zh1l4dl2frp.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-set-up-t-shirt-phantom_ss5_p-201493715+pv-3+u-unuvxidlzfycpjlkfncs+v-nk0iua5ocaqjk4hmrkx6.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2025-team-oscar-piastri-driver-set-up-t-shirt-phantom_ss5_p-201493715+pv-4+u-unuvxidlzfycpjlkfncs+v-fufwwchishsc3h650kdu.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 34,
    name: "McLaren F1 Team Mitchell & Ness Oscar Piastri Soccer Jersey T-Shirt",
    price: "£53.00",
    oldPrice: "£68.00",
    image:
      "https://images.footballfanatics.com/mclaren-f1-team/mens-oscar-piastri-black-mclaren-racing-x-m-and-n-soccer-jersey-t-shirt_ss5_p-203165397+pv-1+u-5s5jj9pmupiri5h9tuti+v-m0m2ehftpobdpzljnxvu.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/mclaren-f1-team/mens-oscar-piastri-black-mclaren-racing-x-m-and-n-soccer-jersey-t-shirt_ss5_p-203165397+pv-2+u-5s5jj9pmupiri5h9tuti+v-cglimivo5qsvse0p61vv.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mens-oscar-piastri-black-mclaren-racing-x-m-and-n-soccer-jersey-t-shirt_ss5_p-203165397+pv-3+u-5s5jj9pmupiri5h9tuti+v-fmvd2nqveuexswbu3836.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/mclaren-f1-team/mens-oscar-piastri-black-mclaren-racing-x-m-and-n-soccer-jersey-t-shirt_ss5_p-203165397+pv-4+u-5s5jj9pmupiri5h9tuti+v-ilhlixczewlmfw1sstwa.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 35,
    name: "Alfa Romeo Sauber F1 Team ORLEN C43 No.77 - Valtteri Bottas 1:43 Spark Model",
    price: "£75.00",
    oldPrice: "£89.00",
    image:
      "https://images.footballfanatics.com/kick-sauber/alfa-romeo-sauber-f1-team-orlen-c43-no77-valtteri-bottas-1:43-spark-model_ss5_p-14420746+pv-1+u-rensfki3hbtcplb0okkp+v-a7onnwwlklpgwd3gaog6.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/kick-sauber/alfa-romeo-sauber-f1-team-orlen-c43-no77-valtteri-bottas-1:43-spark-model_ss5_p-14420746+pv-2+u-rensfki3hbtcplb0okkp+v-5nvccmghmvyhumfraywq.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/kick-sauber/alfa-romeo-sauber-f1-team-orlen-c43-no77-valtteri-bottas-1:43-spark-model_ss5_p-14420746+pv-3+u-rensfki3hbtcplb0okkp+v-xfijd5gxyt3c21m3aou2.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 36,
    name: "Red Bull Racing Yuki Tsunoda 2025 Poster",
    price: "£47.00",
    oldPrice: "£59.00",
    image:
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-yuki-tsunoda-2025-poster_ss5_p-203065881+pv-1+u-m4nwxfq2mbudfaqtcvje+v-gs7eyrffm0bjddisidlb.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-yuki-tsunoda-2025-poster_ss5_p-203065881+pv-1+u-m4nwxfq2mbudfaqtcvje+v-gs7eyrffm0bjddisidlb.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-yuki-tsunoda-2025-poster_ss5_p-203065881+pv-2+u-m4nwxfq2mbudfaqtcvje+v-xs11zibkjl8vka0enafw.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-yuki-tsunoda-2025-poster_ss5_p-203065881+pv-3+u-m4nwxfq2mbudfaqtcvje+v-lgaxaci9psbkywcy52io.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/red-bull-racing/red-bull-racing-yuki-tsunoda-2025-poster_ss5_p-203065881+pv-4+u-m4nwxfq2mbudfaqtcvje+v-lrkoeuwmgooj9z55wzbn.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 37,
    name: "Ayrton Senna EST.1960 Polo - Blue",
    price: "£48.00",
    oldPrice: "£61.00",
    note: "Driver Tee",
    image:
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-est1960-polo-blue_ss5_p-202461400+pv-1+u-xut8ccetfjv9j5vjy8l7+v-evsifn5yh8m2mzir7vn1.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-est1960-polo-blue_ss5_p-202461400+pv-1+u-xut8ccetfjv9j5vjy8l7+v-evsifn5yh8m2mzir7vn1.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-est1960-polo-blue_ss5_p-202461400+pv-2+u-xut8ccetfjv9j5vjy8l7+v-k5kch82mhfakkskvgcgx.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-est1960-polo-blue_ss5_p-202461400+pv-3+u-xut8ccetfjv9j5vjy8l7+v-wt4j2gxecuuhqcvuor7a.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 38,
    name: "Ayrton Senna Logo Polo - Navy",
    price: "£34.00",
    oldPrice: "£46.00",
    image:
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-logo-polo-navy_ss5_p-202461402+pv-4+u-h5jvlanlmdtwcwoygc8n+v-y8svb6l1vvohg9t5k8qg.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-logo-polo-navy_ss5_p-202461402+pv-5+u-h5jvlanlmdtwcwoygc8n+v-qhuhnmtmxrkrtbmc1kia.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/ayrton-senna/ayrton-senna-logo-polo-navy_ss5_p-202461402+pv-6+u-h5jvlanlmdtwcwoygc8n+v-ktb0j9n0upwnbfpzblec.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 39,
    name: "Michael Schumacher Helmet Mini Edition Poster",
    price: "£45.00",
    oldPrice: "£57.00",
    image:
      "https://images.footballfanatics.com/michael-schumacher/michael-schumacher-helmet-mini-edition-poster_ss5_p-13388150+pv-1+u-o4p3enaliolgqz5okddt+v-0lhxt3amecuzr0fm8o7l.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/michael-schumacher/michael-schumacher-helmet-mini-edition-poster_ss5_p-13388150+pv-1+u-o4p3enaliolgqz5okddt+v-0lhxt3amecuzr0fm8o7l.jpg?_hv=2&w=1018",
    ],
  },
  {
    id: 40,
    name: "Scuderia Ferrari Michael Schumacher Japanese GP Pit Stop 2000 Collector's Edition Poster",
    price: "£44.00",
    oldPrice: "£55.00",
    image:
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-michael-schumacher-japanese-gp-pit-stop-2000-collectors-edition-poster_ss5_p-203164490+pv-1+u-ge8uz8et6odr8kodayhh+v-czxa0xk5xs0fmhftx4vt.jpg?_hv=2&w=1018",
    images: [
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-michael-schumacher-japanese-gp-pit-stop-2000-collectors-edition-poster_ss5_p-203164490+pv-1+u-ge8uz8et6odr8kodayhh+v-czxa0xk5xs0fmhftx4vt.jpg?_hv=2&w=1018",
      "https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-michael-schumacher-japanese-gp-pit-stop-2000-collectors-edition-poster_ss5_p-203164490+pv-2+u-ge8uz8et6odr8kodayhh+v-jbdnnemjimqgaoz1k3ok.jpg?_hv=2&w=1018",
    ],
  },
];

export function getProductById(id: number) {
  return driversData.find((p) => p.id === id);
}
>>>>>>> bc67c82 (big update: add account and cart page)
