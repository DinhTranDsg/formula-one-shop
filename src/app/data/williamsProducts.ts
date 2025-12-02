// src/data/williamsProducts.ts
export type Product = {
    id: number;
    name: string;
    price: string;
    oldPrice?: string;
    note?: string;
    image: string;      // dùng cho trang list
    images: string[];   // dùng cho gallery trang chi tiết
};

export const williamsProducts: Product[] = [
    {
        id: 1,
        name: "Williams Racing 2025 Team Hoodie",
        price: "£56.70 with code",
        oldPrice: "£94.50",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-polo-navy_ss5_p-202359067+pv-1+u-naiwjlmkyabai1il8d1e+v-powa8rkzwsc4orcp5xua.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-polo-navy_ss5_p-202359067+pv-1+u-naiwjlmkyabai1il8d1e+v-powa8rkzwsc4orcp5xua.jpg?_hv=2&w=1018",
            "http://images.footballfanatics.com/williams-racing/williams-racing-2025-team-polo-navy_ss5_p-202359067+pv-2+u-naiwjlmkyabai1il8d1e+v-6kal6xtceudurvziffzh.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-polo-navy_ss5_p-202359067+pv-3+u-naiwjlmkyabai1il8d1e+v-m015macvqoibdpo7c6ab.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-polo-navy_ss5_p-202359067+pv-4+u-naiwjlmkyabai1il8d1e+v-rpykwlu2kcepszlykscb.jpg?_hv=2&w=1018",
        ],
    },
    {
        id: 2,
        name: "Williams Racing 2025 Team Polo - Navy",
        price: "£40.50 with code",
        oldPrice: "£67.50",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-t-shirt-navy_ss5_p-202359068+pv-1+u-rach9gqancpqydm96ktl+v-abbdeirvb9nqom3tut1d.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-t-shirt-navy_ss5_p-202359068+pv-1+u-rach9gqancpqydm96ktl+v-abbdeirvb9nqom3tut1d.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-t-shirt-navy_ss5_p-202359068+pv-2+u-rach9gqancpqydm96ktl+v-lhqqkkbtevbg4u0lgzdj.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-t-shirt-navy_ss5_p-202359068+pv-3+u-rach9gqancpqydm96ktl+v-u0oegr8jxdrawp873s04.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-t-shirt-navy_ss5_p-202359068+pv-4+u-rach9gqancpqydm96ktl+v-didaghbyuntfm7ol5wab.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-t-shirt-navy_ss5_p-202359068+pv-5+u-rach9gqancpqydm96ktl+v-c7rhlm9uh1fjoqfp0smq.jpg?_hv=2&w=1018",
        ],
    },
    {
        id: 3,
        name: "Williams Racing Team 2025 Hybrid Jacket",
        price: "£97.20 with code",
        oldPrice: "£162.00",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-carlos-sainz-driver-cap-blue_ss5_p-202359073+pv-1+u-0ndgajvutf9s1aytx9ml+v-dj40gdsztamsh7oos3i6.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-carlos-sainz-driver-cap-blue_ss5_p-202359073+pv-1+u-0ndgajvutf9s1aytx9ml+v-dj40gdsztamsh7oos3i6.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-carlos-sainz-driver-cap-blue_ss5_p-202359073+pv-2+u-0ndgajvutf9s1aytx9ml+v-5lvnszdt6gaesxfmna8j.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-carlos-sainz-driver-cap-blue_ss5_p-202359073+pv-3+u-0ndgajvutf9s1aytx9ml+v-nmadwaypmn7vabahj4oz.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-2025-team-carlos-sainz-driver-cap-blue_ss5_p-202359073+pv-4+u-0ndgajvutf9s1aytx9ml+v-mthb2gynpz8ri716u5pi.jpg?_hv=2&w=1018",
        ],
    },
    {
        id: 4,
        name: "Williams Racing 2025 Team Carlos Sainz Driver Cap - Blue",
        price: "£36.00",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-team-2025-hybrid-jacket_ss5_p-202359086+pv-1+u-t0az5dpjzuana47xdh5h+v-wvwvazaclghyy8z3ddaa.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-team-2025-hybrid-jacket_ss5_p-202359086+pv-1+u-t0az5dpjzuana47xdh5h+v-wvwvazaclghyy8z3ddaa.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-team-2025-hybrid-jacket_ss5_p-202359086+pv-2+u-t0az5dpjzuana47xdh5h+v-na3fernxfwhwbknfy3ps.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-team-2025-hybrid-jacket_ss5_p-202359086+pv-3+u-t0az5dpjzuana47xdh5h+v-lbxsprhljmkz2xa2wm6k.jpg?_hv=2&w=1018",
        ],
    },
    {
        id: 5,
        name: "Williams Racing 2025 1/4 Zip Midlayer",
        price: "£62.10 with code",
        oldPrice: "£103.50",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-puma-pitlane-taped-jacket-blue-/-yellow_ss5_p-202359087+pv-1+u-qngq1mxw3zo88gcp3q6b+v-g5nv9wfrohkccvtxra4z.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-puma-pitlane-taped-jacket-blue-/-yellow_ss5_p-202359087+pv-1+u-qngq1mxw3zo88gcp3q6b+v-g5nv9wfrohkccvtxra4z.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-puma-pitlane-taped-jacket-blue-/-yellow_ss5_p-202359087+pv-2+u-qngq1mxw3zo88gcp3q6b+v-lg1wzecteddxlld7hcyy.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-puma-pitlane-taped-jacket-blue-/-yellow_ss5_p-202359087+pv-3+u-qngq1mxw3zo88gcp3q6b+v-mhyenobpqyrqhd27m0mu.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-puma-pitlane-taped-jacket-blue-/-yellow_ss5_p-202359087+pv-4+u-qngq1mxw3zo88gcp3q6b+v-ptqar0klcmritmu6tad1.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-puma-pitlane-taped-jacket-blue-/-yellow_ss5_p-202359087+pv-5+u-qngq1mxw3zo88gcp3q6b+v-2phnk0opchlhsm3ilffg.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 6,
        name: "Williams Racing 2025 Team T-Shirt - Navy",
        price: "£32.40 with code",
        oldPrice: "£54.00",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-special-edition-night-race-t-shirt-light-purple_ss5_p-202620490+pv-1+u-dveje5kmu1tdatj4bo0h+v-1yff5a72qfvjxbxf7d1c.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-special-edition-night-race-t-shirt-light-purple_ss5_p-202620490+pv-1+u-dveje5kmu1tdatj4bo0h+v-1yff5a72qfvjxbxf7d1c.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-special-edition-night-race-t-shirt-light-purple_ss5_p-202620490+pv-2+u-dveje5kmu1tdatj4bo0h+v-urbamhtblfzclduutjfp.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-special-edition-night-race-t-shirt-light-purple_ss5_p-202620490+pv-3+u-dveje5kmu1tdatj4bo0h+v-ahq5ou7nweugr6lemowx.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-special-edition-night-race-t-shirt-light-purple_ss5_p-202620490+pv-4+u-dveje5kmu1tdatj4bo0h+v-xsl9pbikvwgxzvtlfet4.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-special-edition-night-race-t-shirt-light-purple_ss5_p-202620490+pv-5+u-dveje5kmu1tdatj4bo0h+v-z4iwwd0mppfgimigar5h.jpg?_hv=2&w=1018"
        ],
    },
    {
        id: 7,
        name: "Williams Racing Puma Pitlane Taped Jacket - Blue / Yellow",
        price: "£144.00",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-short-sleeve-t-shirt_ss5_p-203374190+pv-1+u-fe5tnuzomvzz1zojzgkb+v-pn7c149qiqjz6hb1p0xd.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-short-sleeve-t-shirt_ss5_p-203374190+pv-1+u-fe5tnuzomvzz1zojzgkb+v-pn7c149qiqjz6hb1p0xd.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-short-sleeve-t-shirt_ss5_p-203374190+pv-2+u-fe5tnuzomvzz1zojzgkb+v-i4zhvurguqezygndcvam.jpg?_hv=2&w=1018",
            "http://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-short-sleeve-t-shirt_ss5_p-203374190+pv-3+u-fe5tnuzomvzz1zojzgkb+v-mmcrymnrfy3vzyk7xjv7.jpg?_hv=2&w=1018",
        ],
    },
    {
        id: 8,
        name: "Williams Racing Carlos Sainz 2025 1:5 Model Helmet",
        price: "£47.00",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-official-2026-wall-calendar_ss5_p-203669912+pv-1+u-ewyiuxhjmpfuwnytsyu9+v-s1yrikwmtx26uemn6xpm.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-official-2026-wall-calendar_ss5_p-203669912+pv-1+u-ewyiuxhjmpfuwnytsyu9+v-s1yrikwmtx26uemn6xpm.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-official-2026-wall-calendar_ss5_p-203669912+pv-2+u-ewyiuxhjmpfuwnytsyu9+v-j9p5tizkkkun8vfxw9hy.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-official-2026-wall-calendar_ss5_p-203669912+pv-3+u-ewyiuxhjmpfuwnytsyu9+v-yu9om3lezccow82akjo0.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-official-2026-wall-calendar_ss5_p-203669912+pv-4+u-ewyiuxhjmpfuwnytsyu9+v-isyxctze9ylxpynmyvq9.jpg?_hv=2&w=1018",
        ],
    },
    {
        id: 9,
        name: "Williams Racing x Reflo Carlos Sainz Hoodie",
        price: "£51.00 with code",
        oldPrice: "£85.00",
        image:
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-hoodie_ss5_p-203374191+pv-1+u-0060c8xqwkxhe29xbnlp+v-v4j5hzs0kwhx6s6jggjd.jpg?_hv=2&w=1018",
        images: [
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-hoodie_ss5_p-203374191+pv-1+u-0060c8xqwkxhe29xbnlp+v-v4j5hzs0kwhx6s6jggjd.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-hoodie_ss5_p-203374191+pv-1+u-0060c8xqwkxhe29xbnlp+v-v4j5hzs0kwhx6s6jggjd.jpg?_hv=2&w=1018",
            "https://images.footballfanatics.com/williams-racing/williams-racing-x-reflo-carlos-sainz-hoodie_ss5_p-203374191+pv-3+u-0060c8xqwkxhe29xbnlp+v-zafmmgwryc6ja0wm5ise.jpg?_hv=2&w=1018",
        ],
    },
];

export function getWilliamsProductById(id: number): Product | undefined {
    return williamsProducts.find((p) => p.id === id);
}
