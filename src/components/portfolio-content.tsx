import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function PortfolioContent() {
  const portfolioAllocationImage = PlaceHolderImages.find((img) => img.id === 'portfolio-allocation');
  const bitcoinImage = PlaceHolderImages.find((img) => img.id === 'portfolio-asset-bitcoin');
  const ethereumImage = PlaceHolderImages.find((img) => img.id === 'portfolio-asset-ethereum');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold font-headline tracking-tight">Your Portfolio</h2>
        <p className="mt-1 text-muted-foreground">
          A detailed overview of your crypto assets and performance.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Asset Allocation</CardTitle>
            <CardDescription>Your portfolio's distribution across different assets.</CardDescription>
          </CardHeader>
          <CardContent>
            {portfolioAllocationImage && (
              <Image
                src={portfolioAllocationImage.imageUrl}
                alt={portfolioAllocationImage.description}
                width={800}
                height={300}
                data-ai-hint={portfolioAllocationImage.imageHint}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Total Portfolio Value</CardTitle>
            <CardDescription>Current estimated value.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$12,345.67</p>
            <p className="text-green-500 text-sm mt-1">+5.2% ($601.12) since last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Top Holdings</CardTitle>
            <CardDescription>Your largest positions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3 mb-2">
              {bitcoinImage && (
                <Image
                  src={bitcoinImage.imageUrl}
                  alt={bitcoinImage.description}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold">Bitcoin (BTC)</p>
                <p className="text-sm text-muted-foreground">$7,500.00 (60.7%)</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {ethereumImage && (
                <Image
                  src={ethereumImage.imageUrl}
                  alt={ethereumImage.description}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-semibold">Ethereum (ETH)</p>
                <p className="text-sm text-muted-foreground">$3,000.00 (24.3%)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Recent Activity</CardTitle>
            <CardDescription>Your latest transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>Bought 0.05 BTC - 2 days ago</li>
              <li>Sold 0.1 ETH - 5 days ago</li>
              <li>Received 100 USDT - 1 week ago</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

