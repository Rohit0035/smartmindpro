import "../assets/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import AOSWrapper from "../components/AOSWrapper";
import MainNavbar from "../components/MainNavbar";

export const metadata = {
  title: "SmartMind",
  description: "SmartMind official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body>
        <MainNavbar />
        <AOSWrapper>
          <main>{children}</main>
        </AOSWrapper>
        <Footer />
      </body>
    </html>
  );
}
