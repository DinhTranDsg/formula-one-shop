import Link from "next/link";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-8 border-t bg-[#f6f6f6] text-sm text-gray-800">
            {/* Khối lớn màu xám nhạt */}
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Customer Service */}
                <div>
                    <h4 className="mb-3 font-semibold">Customer Service</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#">Help</Link></li>
                        <li><Link href="#">Track Order</Link></li>
                        <li><Link href="#">Size Chart</Link></li>
                    </ul>
                </div>

                {/* Worry Free Shopping */}
                <div>
                    <h4 className="mb-3 font-semibold">Worry Free Shopping</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#">Promo Terms and Exclusions</Link></li>
                        <li><Link href="#">Safe Shopping</Link></li>
                        <li><Link href="#">Delivery &amp; Shipping</Link></li>
                        <li><Link href="#">90-Day Returns</Link></li>
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h4 className="mb-3 font-semibold">Information</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#">My Account</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Affiliate Program</Link></li>
                        <li><Link href="#">Competition T&amp;Cs</Link></li>
                    </ul>
                </div>

                {/* Sign up + Follow us */}
                <div className="flex flex-col gap-4 items-start md:items-end">
                    <div className="text-sm text-gray-700">
                        <p className="mb-3">
                            Stay updated on sales, new items and more
                        </p>
                        <button className="border border-gray-800 px-5 py-2 text-xs font-semibold">
                            SIGN UP &amp; SAVE 15%
                        </button>
                    </div>
                    <div className="text-sm">
                        <p className="mb-2 font-semibold">Follow Us</p>
                        <div className="flex gap-3">
                            <button className="h-8 w-8 rounded-full border border-black flex items-center justify-center text-xs">
                                X
                            </button>
                            <button className="h-8 w-8 rounded-full border border-black flex items-center justify-center text-xs">
                                📷
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thanh dưới cùng */}
            <div className="border-t bg-white">
                <div className="max-w-7xl mx-auto px-8 py-4 text-xs text-gray-600 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    {/* Links nhỏ */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        <Link href="#">Privacy Policy</Link>
                        <span>|</span>
                        <Link href="#">Accessibility</Link>
                        <span>|</span>
                        <Link href="#">Terms of Use</Link>
                        <span>|</span>
                        <Link href="#">Modern Slavery and Child Labor Statement</Link>
                        <span>|</span>
                        <Link href="#">Cookie Policy &amp; Management</Link>
                        <span>|</span>
                        <Link href="#">Product Concerns</Link>
                    </div>

                    {/* Text bản quyền + logo thẻ (làm đơn giản) */}
                    <div className="flex flex-col items-start md:items-end gap-1">
                        <p>
                            © {year}, Fanatics, LLC. and/or its affiliated entities. All
                            Rights Reserved. No portion of this site may be reproduced or
                            duplicated without the express permission of Fanatics.
                        </p>
                        <div className="flex gap-2 text-[10px]">
                            <span>VISA</span>
                            <span>Mastercard</span>
                            <span>PayPal</span>
                            <span>AMEX</span>
                            <span>Maestro</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
