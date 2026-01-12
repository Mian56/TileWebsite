import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectGallery from "../components/ProjectGallery";
import WorkGallery from "../components/WorkGallery";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Gallery */}
      <ProjectGallery />

      {/* Services */}
      <Services />

      {/* Reviews */}
      <Reviews />

      {/* Contact */}
      <ContactForm />

      {/*Footer */}
      <Footer />
    </main>
  );
}