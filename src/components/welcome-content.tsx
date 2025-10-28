import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function WelcomeContent() {
  const welcomeImage1 = PlaceHolderImages.find((img) => img.id === 'welcome-1');
  const welcomeImage2 = PlaceHolderImages.find((img) => img.id === 'welcome-2');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tight">
          Welcome to the Future of Crypto Intelligence
        </h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect your wallet to unlock personalized insights, portfolio analysis, and AI-powered guidance.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          {welcomeImage1 && (
            <Image
              src={welcomeImage1.imageUrl}
              alt={welcomeImage1.description}
              width={600}
              height={400}
              data-ai-hint={welcomeImage1.imageHint}
              className="w-full h-48 object-cover"
            />
          )}
          <CardHeader>
            <CardTitle className="font-headline">What is DyorAI?</CardTitle>
            <CardDescription>
              DyorAI is your personal crypto research assistant. We combine powerful AI with your portfolio data to provide you with tailored insights and help you navigate the complex world of crypto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          {welcomeImage2 && (
            <Image
              src={welcomeImage2.imageUrl}
              alt={welcomeImage2.description}
              width={600}
              height={400}
              data-ai-hint={welcomeImage2.imageHint}
              className="w-full h-48 object-cover"
            />
          )}
          <CardHeader>
            <CardTitle className="font-headline">Getting Started</CardTitle>
            <CardDescription>
              New to crypto? No problem. Our platform provides easy-to-understand guides and our AI assistant is here to answer any questions you have. Connect your wallet to begin your journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0">Explore Guides <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
