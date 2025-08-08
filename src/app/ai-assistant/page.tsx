import AIAssistant from '@/components/AIAssistant';

export default function AiAssistantPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-12">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold md:text-5xl">
          AI Gardening Assistant
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Get gardening tips and techniques tailored to your local weather conditions. Enter your location to receive seasonal advice and learn how to mitigate weather-related challenges.
        </p>
      </div>

      <div className="mt-8">
        <AIAssistant />
      </div>
    </div>
  );
}
