"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "What formats does Nano Banana support?",
      answer:
        "Nano Banana supports all major image formats including PNG, JPG, WebP, and GIF. Maximum file size is 50MB. We'll automatically optimize your image for the best results.",
    },
    {
      id: 2,
      question: "How does Nano Banana maintain character consistency?",
      answer:
        "Our advanced AI model uses facial recognition and semantic understanding to maintain the identity and key features of subjects throughout transformations. This ensures edits look natural and preserve the original character's essence.",
    },
    {
      id: 3,
      question: "Can I use Nano Banana for commercial projects?",
      answer:
        "Yes! Nano Banana supports both personal and commercial use. Commercial licenses include higher usage limits, priority support, and batch processing capabilities. Check our pricing page for details.",
    },
    {
      id: 4,
      question: "How long does it take to process an image?",
      answer:
        "Most images are processed in 15-30 seconds. Processing time depends on image complexity and your current queue. Premium members get priority processing with faster results.",
    },
    {
      id: 5,
      question: "Is my data private and secure?",
      answer:
        "Absolutely. All uploads are encrypted end-to-end. We never store your original images or use them for training. Your data is automatically deleted after processing, and you can request immediate deletion anytime.",
    },
    {
      id: 6,
      question: "Can I edit multiple images at once?",
      answer:
        "Yes! Our batch processing feature allows you to apply the same edits to multiple images simultaneously. This is perfect for maintaining consistency across photo series or content batches.",
    },
    {
      id: 7,
      question: "What if I'm not satisfied with the result?",
      answer:
        "You have unlimited revision options. If the first result isn't perfect, you can refine your prompt and regenerate. We also offer a satisfaction guarantee with full refunds within 30 days.",
    },
    {
      id: 8,
      question: "How do I compare my work with the Nano Banana model?",
      answer:
        "Visit our showcase page to see before/after examples from real users. You can also try our free trial with up to 5 image edits to experience the quality firsthand.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary mb-4 inline-block">QUESTIONS?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70">Everything you need to know about Nano Banana</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-secondary/30">
                  <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-6 bg-muted rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
          <p className="text-foreground/70 mb-4">
            Can&apos;t find what you&apos;re looking for? Reach out to our support team.
          </p>
          <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
