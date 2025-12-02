// src/app/data/mercedesProducts.ts

export type Product = {
    id: number;
    name: string;
    price: string;
    oldPrice?: string;
    note?: string;
    image: string;      // ảnh dùng cho trang danh sách (team page)
    images: string[];   // ảnh lớn dùng cho trang chi tiết (gallery)
};

export const mercedesProducts: Product[] = [
    {
        id: 1,
        name: "Mercedes AMG Petronas adidas F1 2025 Team Hoodie - Black",
        price: "£77.00 with code",
        oldPrice: "£110.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+u-p29ozrz5c7mpsl0nsiix+v-m7mhdcdj9zsx1lu9i6gi.jpg?_hv=2&w=532",
        images: [
            // 2 ảnh lớn dùng cho trang chi tiết
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+pv-6+u-p29ozrz5c7mpsl0nsiix+v-boln4burmvba2zdgwoet.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+pv-7+u-p29ozrz5c7mpsl0nsiix+v-vzo1jstsysaz76sq6y6p.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+pv-8+u-p29ozrz5c7mpsl0nsiix+v-n4gnqkpdfp7lgnr5z4bt.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+pv-9+u-p29ozrz5c7mpsl0nsiix+v-xx8nlbtd0vjg7hiltn7r.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-hoodie-black_ss5_p-202359124+pv-10+u-p29ozrz5c7mpsl0nsiix+v-roa2ou2xojbplajuyxk3.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 2,
        name: "Mercedes AMG Petronas adidas Authentic Team Driver T-Shirt - Black",
        price: "£70.00 with code",
        oldPrice: "£100.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-authentic-team-driver-t-shirt-black_ss5_p-202359169+u-jcr8dc3ckyv1kxlitgz2+v-np1lpxmslcwbdvngjxsn.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-authentic-team-driver-t-shirt-black_ss5_p-202359169+pv-6+u-jcr8dc3ckyv1kxlitgz2+v-n8lstnvlidcbvmq0ae3z.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-authentic-team-driver-t-shirt-black_ss5_p-202359169+pv-7+u-jcr8dc3ckyv1kxlitgz2+v-oy3nobzm1mfztss9ump9.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-authentic-team-driver-t-shirt-black_ss5_p-202359169+pv-8+u-jcr8dc3ckyv1kxlitgz2+v-fmp0awclvpexjghu8wc8.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-authentic-team-driver-t-shirt-black_ss5_p-202359169+pv-9+u-jcr8dc3ckyv1kxlitgz2+v-aptkjfupbu5flhjegf14.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-authentic-team-driver-t-shirt-black_ss5_p-202359169+pv-10+u-jcr8dc3ckyv1kxlitgz2+v-n5goentqfxe9rtyyzsr4.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 3,
        name: "Mercedes AMG Petronas adidas F1 Team Mechanics Rain Jacket - Black",
        price: "£112.00 with code",
        oldPrice: "£160.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-team-mechanics-rain-jacket-black_ss5_p-202359172+pv-6+u-rld1p2nosupuxajg7294+v-huislmajahdqxooz384i.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-team-mechanics-rain-jacket-black_ss5_p-202359172+pv-6+u-rld1p2nosupuxajg7294+v-huislmajahdqxooz384i.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-team-mechanics-rain-jacket-black_ss5_p-202359172+pv-7+u-rld1p2nosupuxajg7294+v-unmniorqbyww7gmrxxyd.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-team-mechanics-rain-jacket-black_ss5_p-202359172+pv-8+u-rld1p2nosupuxajg7294+v-g998jfrof4gws5ckotb8.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-team-mechanics-rain-jacket-black_ss5_p-202359172+pv-9+u-rld1p2nosupuxajg7294+v-j2eyzz99rwelbfsq8dbx.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 4,
        name: "Mercedes AMG Petronas adidas F1 2025 Team 1/4 Zip Sweat - Black",
        price: "£77.00 with code",
        oldPrice: "£110.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black-kids_ss5_p-202358971+u-z6a8vrxyhbbp3hefpsp7+v-wdn98xweayhi9us00amr.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black-kids_ss5_p-202358971+u-z6a8vrxyhbbp3hefpsp7+v-wdn98xweayhi9us00amr.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black-kids_ss5_p-202358971+pv-2+u-z6a8vrxyhbbp3hefpsp7+v-tlvjeqkyptoicbvswqxb.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black-kids_ss5_p-202358971+pv-3+u-z6a8vrxyhbbp3hefpsp7+v-mixfyuamr5xigffezjnz.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black-kids_ss5_p-202358971+pv-4+u-z6a8vrxyhbbp3hefpsp7+v-2vohvurseo4eibfdwpmd.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black-kids_ss5_p-202358971+pv-5+u-z6a8vrxyhbbp3hefpsp7+v-cvjf8ithruuxu9x7sf6w.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 5,
        name: "Mercedes AMG Petronas adidas Vegas GP Track Jacket",
        price: "£80.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-polo-black_ss5_p-202359114+u-gugnkihvgsmxim78i4il+v-dpy9kl1aqtbnsrw67i5v.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-polo-black_ss5_p-202359114+u-gugnkihvgsmxim78i4il+v-dpy9kl1aqtbnsrw67i5v.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-polo-black_ss5_p-202359114+pv-7+u-gugnkihvgsmxim78i4il+v-0pnl1piukzafknvcrlmq.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-polo-black_ss5_p-202359114+pv-8+u-gugnkihvgsmxim78i4il+v-apzv9x3xcggruymvkjok.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-polo-black_ss5_p-202359114+pv-9+u-gugnkihvgsmxim78i4il+v-jlqb1cynhw9ajfzetock.jpg?_hv=2&w=1018",

        ],
    },
    {
        id: 6,
        name: "Mercedes AMG Petronas adidas F1 2025 Team Driver T-Shirt - Black",
        price: "£45.00 with code",
        oldPrice: "£75.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-1/4-zip-sweat-black_ss5_p-202359128+u-xrfrbqkzgi3pnwmtxfnk+v-xt5t93jwsm7cwre9gsz5.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-1/4-zip-sweat-black_ss5_p-202359128+u-xrfrbqkzgi3pnwmtxfnk+v-xt5t93jwsm7cwre9gsz5.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-1/4-zip-sweat-black_ss5_p-202359128+pv-7+u-xrfrbqkzgi3pnwmtxfnk+v-b9zhucvtmepiv5niuoj6.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-1/4-zip-sweat-black_ss5_p-202359128+pv-8+u-xrfrbqkzgi3pnwmtxfnk+v-vjjhq4w4v2b34iiagam8.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-1/4-zip-sweat-black_ss5_p-202359128+pv-9+u-xrfrbqkzgi3pnwmtxfnk+v-t3f3uoxunuxqmjvm3ycb.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 7,
        name: "Mercedes AMG Petronas adidas F1 2025 Team Polo - Black",
        price: "£59.50 with code",
        oldPrice: "£85.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-george-russell-2024-1:5-spark-model-helmet_ss5_p-201710620+u-izqcm8kh53nrxa8ulw3e+v-owgcgvkopnbuqwyffuj4.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-george-russell-2024-1:5-spark-model-helmet_ss5_p-201710620+u-izqcm8kh53nrxa8ulw3e+v-owgcgvkopnbuqwyffuj4.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-george-russell-2024-1:5-spark-model-helmet_ss5_p-201710620+pv-2+u-izqcm8kh53nrxa8ulw3e+v-uopyh7bknypqqcrzf3cg.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-george-russell-2024-1:5-spark-model-helmet_ss5_p-201710620+pv-3+u-izqcm8kh53nrxa8ulw3e+v-5cwmlwzmjur6o8cced8o.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-george-russell-2024-1:5-spark-model-helmet_ss5_p-201710620+pv-4+u-izqcm8kh53nrxa8ulw3e+v-trgszz7kqcav9ek8gy7l.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-george-russell-2024-1:5-spark-model-helmet_ss5_p-201710620+pv-5+u-izqcm8kh53nrxa8ulw3e+v-czi1jkvc7ypwgep2ftja.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 8,
        name: "Mercedes AMG Petronas adidas F1 2025 Team Driver T-Shirt - Black - Kids",
        price: "£31.50 with code",
        oldPrice: "£45.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-small-logo-t-shirt-black_ss5_p-202359142+u-h6gqjtteasjve7ji5jm4+v-ehsnbresiij7bo8keraz.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-small-logo-t-shirt-black_ss5_p-202359142+u-h6gqjtteasjve7ji5jm4+v-ehsnbresiij7bo8keraz.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-small-logo-t-shirt-black_ss5_p-202359142+pv-2+u-h6gqjtteasjve7ji5jm4+v-6ubo7uojnxtweuxqqbdo.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-small-logo-t-shirt-black_ss5_p-202359142+pv-3+u-h6gqjtteasjve7ji5jm4+v-22gtartqbwwj7xxvilox.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-small-logo-t-shirt-black_ss5_p-202359142+pv-4+u-h6gqjtteasjve7ji5jm4+v-uojrj8bhfqqkkr8ikdid.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-small-logo-t-shirt-black_ss5_p-202359142+pv-5+u-h6gqjtteasjve7ji5jm4+v-i8y2eemmycploncft847.png?_hv=2&w=1018"
        ],

    },
    {
        id: 9,
        name: "Mercedes AMG Petronas adidas Vegas GP T-Shirt",
        price: "£38.00",
        image:
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black_ss5_p-202359117+u-ibxwikmmmcytljntcmca+v-bblxzqpx0mrjf0p49bnl.jpg?_hv=2&w=532",
        images: [
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black_ss5_p-202359117+u-ibxwikmmmcytljntcmca+v-bblxzqpx0mrjf0p49bnl.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black_ss5_p-202359117+pv-7+u-ibxwikmmmcytljntcmca+v-vk1jszg353gkzj1owkpv.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black_ss5_p-202359117+pv-8+u-ibxwikmmmcytljntcmca+v-cri7yrow9bbjwckebao4.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-adidas-f1-2025-team-driver-t-shirt-black_ss5_p-202359117+pv-9+u-ibxwikmmmcytljntcmca+v-mpyf40ziuwinsoxrc9dp.jpg?_hv=2&w=1018"
        ],
    },
];

export function getMercedesProductById(
    id: string | number
): Product | undefined {
    const numericId = typeof id === "string" ? parseInt(id, 10) : id;
    return mercedesProducts.find((p) => p.id === numericId);
}
