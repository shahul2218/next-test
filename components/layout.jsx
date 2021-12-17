import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-16 pb-4 md:w-10/12 sm:w-11/12 mx-auto">
        {children}
      </main>
      <footer className="bg-slate-900">
        <Footer />
      </footer>
    </>
  );
}
