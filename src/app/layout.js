import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LUMEN | Data Science & AI Initiative",
    description: "LUMEN: Bridging Theory and Data Reality. The premier Data Science & AI Student Initiative at Ludwigshafen University of Business and Society.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
