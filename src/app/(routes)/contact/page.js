import ContactForm from "@/app/components/contact/o-form/ContactForm";
import HeroSection from "@/app/components/HeroSection/HeroSection";

export default function Contact() {
  return (
    <>
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="contact us" />
        <ContactForm />
      </main>
    </>
  );
}
