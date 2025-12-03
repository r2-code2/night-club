import ContactForm from "@/app/components/contact/o-form/ContactForm";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="grid col-(--content-col) grid-cols-subgrid mt-30">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
