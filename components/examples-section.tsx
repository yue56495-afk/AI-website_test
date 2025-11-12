export function ExamplesSection() {
  const examples = [
    {
      id: 1,
      title: "Portrait Enhancement",
      description: "Transform portraits with dramatic lighting and enhanced details",
      before: "/classic-portrait.png",
      after: "/enhanced-portrait-with-golden-lighting.jpg",
    },
    {
      id: 2,
      title: "Scene Transformation",
      description: "Change environments while maintaining character consistency",
      before: "/person-in-office.png",
      after: "/same-person-in-mountain-landscape.jpg",
    },
    {
      id: 3,
      title: "Style Transfer",
      description: "Apply artistic styles while preserving subject identity",
      before: "/person-photo-realistic.jpg",
      after: "/same-person-painted-impressionist-style.jpg",
    },
    {
      id: 4,
      title: "Lighting Adjustment",
      description: "Perfect your shots with ideal lighting conditions",
      before: "/indoor-photo-dim-lighting.jpg",
      after: "/same-indoor-photo-bright-studio-lighting.jpg",
    },
  ]

  return (
    <section id="examples" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary mb-4 inline-block">SHOWCASE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">See What&apos;s Possible</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore real-world examples of Nano Banana&apos;s powerful image transformation capabilities
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example) => (
            <div
              key={example.id}
              className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition"
            >
              {/* Before/After */}
              <div className="relative h-80 bg-background flex">
                <div className="flex-1 overflow-hidden">
                  <img
                    src={example.before || "/placeholder.svg"}
                    alt={`${example.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <img
                    src={example.after || "/placeholder.svg"}
                    alt={`${example.title} - After`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary opacity-50" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  ← Before | After →
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{example.title}</h3>
                <p className="text-sm text-foreground/70">{example.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition inline-flex items-center gap-2">
            Explore More Examples
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
