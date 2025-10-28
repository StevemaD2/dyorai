import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function DashboardContent() {
  const portfolioImage = PlaceHolderImages.find((img) => img.id === 'dashboard-portfolio');
  const marketImage = PlaceHolderImages.find((img) => img.id === 'dashboard-market');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">Dashboard</h2>
        <p className="mt-1 text-muted-foreground">
          Here's a snapshot of your crypto world.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Portfolio Performance</CardTitle>
            <CardDescription>24h performance of your assets.</CardDescription>
          </CardHeader>
          <CardContent>
            {portfolioImage && (
              <Image
                src={portfolioImage.imageUrl}
                alt={portfolioImage.description}
                width={800}
                height={300}
                data-ai-hint={portfolioImage.imageHint}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Total Balance</CardTitle>
            <CardDescription>Estimated value of your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$12,345.67</p>
            <p className="text-green-500 text-sm mt-1">+2.5% ($301.12) today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Top Mover</CardTitle>
            <CardDescription>Your portfolio's biggest gainer</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Ethereum</p>
            <p className="text-green-500 text-sm mt-1">+8.1% in the last 24h</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Market Mood</CardTitle>
            <CardDescription>Overall market sentiment</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">Greed</p>
            <p className="text-muted-foreground text-sm mt-1">Fear & Greed Index: 72</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
