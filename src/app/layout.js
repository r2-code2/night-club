import { Ubuntu } from "next/font/google";
import "./globals.css";
import "./components/frames/triangles.css";
import Footer from "./components/footer/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Nightclub",
  description: "by group r2-code2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`grid grid-cols-(--project-grid-cols)   ${ubuntu.variable}  antialiased`}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
