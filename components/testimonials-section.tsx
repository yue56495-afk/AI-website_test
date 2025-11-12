import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Professional Photographer",
      content:
        "Nano Banana has revolutionized my workflow. The character consistency is incredible. What used to take hours now takes minutes.",
      rating: 5,
      avatar: "SC",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Content Creator",
      content:
        "I've tried every image editing tool out there. This is the first one that actually understands what I want to do without complex settings.",
      rating: 5,
      avatar: "MJ",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Graphic Designer",
      content:
        "The natural language prompts make it so intuitive. My clients are amazed at how fast I can iterate on designs now.",
      rating: 5,
      avatar: "ER",
    },
    {
      id: 4,
      name: "David Park",
      role: "Marketing Director",
      content:
        "We use this for all our campaign visuals. The quality is exceptional and the speed boost has improved our campaign turnaround time significantly.",
      rating: 5,
      avatar: "DP",
    },
    {
      id: 5,
      name: "Jessica Liu",
      role: "AI Researcher",
      content:
        "The architecture is impressive. Nano Banana's approach to maintaining consistency while allowing transformations is genuinely innovative.",
      rating: 5,
      avatar: "JL",
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Social Media Manager",
      content:
        "Best investment for our team this year. It's elevated our content quality and freed up so much time for strategy work.",
      rating: 5,
      avatar: "AT",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 inline-block">LOVE FROM USERS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Loved by Creators</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Join thousands of professionals already using Nano Banana to transform their creative work
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 line-clamp-4">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                  <div className="text-xs text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-sm text-foreground/70">Active Users</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
            <p className="text-sm text-foreground/70">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500K+</div>
            <p className="text-sm text-foreground/70">Images Generated</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-sm text-foreground/70">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
