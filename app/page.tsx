import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExamplesSection } from "@/components/examples-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ExamplesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
