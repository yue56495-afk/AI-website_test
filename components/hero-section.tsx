"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ArrowRight, Sparkles, Loader2 } from "lucide-react"

export function HeroSection() {
  const [prompt, setPrompt] = useState("")
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }

    setIsLoading(true)
    setError(null)
    setGeneratedImage(null)

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate image')
      }

      const data = await response.json()

      if (data.data && data.data.length > 0 && data.data[0].url) {
        setGeneratedImage(data.data[0].url)
      } else {
        throw new Error('No image URL returned from API')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating banana decorations */}
      <div className="absolute left-10 top-20 text-6xl banana-float banana-float-delay-1 opacity-30">🍌</div>
      <div className="absolute right-10 top-40 text-5xl banana-float banana-float-delay-2 opacity-30">🍌</div>

      <div className="max-w-6xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-muted rounded-full border border-border">
            <span className="text-sm font-medium text-foreground flex items-center gap-2">
              <Sparkles size={16} className="text-primary" />
              The AI model that outperforms Flux Kontext. Try Now
              <ArrowRight size={16} />
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Nano Banana</h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance mb-8">
            Transform any image with simple text prompts. Nano-banana&apos;s advanced model delivers consistent
            character editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image
            editing.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <span className="text-primary">⚡</span>
              <span className="text-sm font-medium">One-shot editing</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <span className="text-primary">✨</span>
              <span className="text-sm font-medium">Multi-image support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border">
              <span className="text-primary">🎯</span>
              <span className="text-sm font-medium">Natural language</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition flex items-center justify-center gap-2">
              Start Editing
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition">
              View Examples
            </button>
          </div>
        </div>

        {/* AI Image Generation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-border rounded-2xl p-8">
          {/* Prompt Input Area */}
          <div className="flex flex-col gap-4">
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="text-center p-8 border-2 border-dashed border-border rounded-xl bg-secondary/50 cursor-pointer hover:bg-secondary transition"
            >
              <div className="text-4xl text-primary mb-4">✨</div>
              <h3 className="font-semibold text-foreground mb-2">AI Image Generation</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Describe the image you want to create with AI
              </p>
              <p className="text-xs text-foreground/50">
                Click to upload reference image (optional) or drag and drop
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                aria-label="Upload image"
              />
            </div>

            {uploadedImage && (
              <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary border border-border">
                <img
                  src={uploadedImage}
                  alt="Reference image"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="absolute top-2 right-2 bg-white text-foreground rounded-full p-2 hover:bg-secondary transition shadow-lg"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-foreground">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to generate. E.g., '星际穿越，黑洞，黑洞里冲出一辆快支离破碎的复古列车...'"
                className="h-32 p-4 border border-border rounded-lg bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />

              {error && (
                <div className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button
                onClick={generateImage}
                disabled={isLoading || !prompt.trim()}
                className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Image'
                )}
              </button>
            </div>
          </div>

          {/* Generated Image Display */}
          <div className="flex flex-col gap-4">
            {generatedImage ? (
              <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary border border-border">
                <img
                  src={generatedImage}
                  alt="Generated image"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => {
                    setGeneratedImage(null)
                    setError(null)
                  }}
                  className="absolute top-2 right-2 bg-white text-foreground rounded-full p-2 hover:bg-secondary transition shadow-lg"
                >
                  ✕
                </button>
                <a
                  href={generatedImage}
                  download="generated-image.jpg"
                  className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-medium hover:bg-primary/90 transition"
                >
                  Download
                </a>
              </div>
            ) : isLoading ? (
              <div className="flex items-center justify-center h-96 bg-secondary rounded-lg border border-border">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-primary" />
                  <p className="text-foreground/70">Generating your image...</p>
                  <p className="text-sm text-foreground/50 mt-2">This may take a few moments</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 bg-secondary rounded-lg border border-border">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎨</div>
                  <p className="text-foreground/70">Generated image will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
