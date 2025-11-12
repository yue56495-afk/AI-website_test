# AI Image Generation Website

A Next.js application that generates AI images using Volces (ByteDance) API.

## Features

- 🎨 AI image generation with Chinese/English prompts
- 📸 Optional reference image upload
- 🌗 Dark/light theme support
- 📱 Responsive design
- ⚡ Built with Next.js 16 + TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yue56495-afk/AI-website_test.git
cd AI-website_test
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```
ARK_API_KEY=your_volces_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variable in Vercel dashboard:
   - **ARK_API_KEY**: Your Volces API key
4. Deploy

### Environment Variables

- `ARK_API_KEY`: Your Volces (ByteDance) API key for image generation

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **API**: Volces Image Generation API

## API Routes

- `POST /api/generate-image` - Generate images with AI

## License

MIT